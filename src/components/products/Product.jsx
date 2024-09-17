import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	add,
	incrementProductQuantity,
	decrementProductQuantity,
} from "../../features/cart/cartSlice";

import { MdOutlineAddShoppingCart } from "react-icons/md";

import { getWidth } from "../../utils/getWidth";

import Counter from "../common/Counter";
import ProductInfo from "./ProductInfo";
import Button from "../common/Button";

export default function Product({ illustrationUrls, name, category, price }) {
	const dispatch = useDispatch();

	const handleAddCart = () => {
		const productToCart = {
			name: name,
			category: category,
			price: price,
			thumbnail: illustrationUrls.thumbnail,
			quantity: 1,
		};
		dispatch(add(productToCart));
	};

	const [windowWidth, setWindowWidth] = useState(getWidth());

	const [imgUrl, setImgUrl] = useState(illustrationUrls.desktop);

	useEffect(() => {
		const updateImageUrl = (width) => {
			if (width <= 640) {
				setImgUrl(illustrationUrls.mobile);
			} else if (width <= 768) {
				setImgUrl(illustrationUrls.tablet);
			} else {
				setImgUrl(illustrationUrls.desktop);
			}
		};

		updateImageUrl(windowWidth);

		const handleResize = () => {
			setWindowWidth(getWidth());
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [windowWidth]);

	const cart = useSelector((state) => state.cart.value.products);
	const product = cart.find((product) => product.name === name) || false;

	return (
		<div>
			<div className="flex flex-col mb-4 items-center justify-center">
				<img
					src={imgUrl}
					alt={name}
					className={`rounded-lg ${product && "border border-primary-red"}`}
				/>
				<div className="-mt-[10%]">
					{product ? (
						<Counter
							quantity={product.quantity}
							onIncrement={() =>
								dispatch(incrementProductQuantity({ name: name }))
							}
							onDecrement={() =>
								dispatch(decrementProductQuantity({ name: name }))
							}
						/>
					) : (
						<Button
							type="outline"
							onClick={() => handleAddCart()}
							className={"min-w-40"}
							ariaLabel="Add product in cart"
						>
							<MdOutlineAddShoppingCart
								size={25}
								className="text-primary-red"
							/>{" "}
							Add Cart
						</Button>
					)}
				</div>
			</div>
			<ProductInfo name={name} category={category} price={price} />
		</div>
	);
}
