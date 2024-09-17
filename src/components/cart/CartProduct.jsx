import { useDispatch } from "react-redux";

import { CiCircleRemove } from "react-icons/ci";

import { removeProductById } from "../../features/cart/cartSlice";

export default function CartProduct({ name, price, quantity }) {
	const dispatch = useDispatch();

	return (
		<div className="py-4 border-b">
			<div className="flex justify-between items-center">
				<div>
					<p className="text-custom-rose-900 font-medium">{name}</p>
					<div className="flex gap-2">
						<p className="text-primary-red font-medium">{quantity}x</p>
						<div className="flex gap-2">
							<p className="text-gray-400">@${price}</p>
							<p className="text-custom-rose-500">${price * quantity}</p>
						</div>
					</div>
				</div>
				<button aria-label="Remove product from cart">
					<CiCircleRemove
						size={25}
						className="text-gray-400"
						onClick={() => dispatch(removeProductById({ name: name }))}
					/>
				</button>
			</div>
		</div>
	);
}
