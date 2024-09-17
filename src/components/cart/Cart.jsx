import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

import Empty from "./Empty";
import CartProduct from "./CartProduct";
import CartFooter from "./CartFooter";

export default function Cart() {
	const cart = useSelector((state) => state.cart.value.products);
	const isEmpty = cart.length === 0;

	const totalQtd = cart.reduce(
		(acummulator, cart) => acummulator + cart.quantity,
		0
	);

	return (
		<section className="bg-white rounded-lg p-4 max-h-[30.5rem] flex flex-col">
			<h2 className="text-xl font-bold text-primary-red">
				Your Cart ({totalQtd})
			</h2>
			{isEmpty ? (
				<Empty />
			) : (
				<>
					<div className="flex-grow overflow-y-auto">
						{cart.map((product) => (
							<CartProduct
								key={uuidv4()}
								name={product.name}
								price={product.price}
								quantity={product.quantity}
							/>
						))}
					</div>
					<div className="mt-4">
						<CartFooter />
					</div>
				</>
			)}
		</section>
	);
}
