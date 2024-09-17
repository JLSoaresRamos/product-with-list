import { useSelector } from "react-redux";

export default function TotalOrder() {
	const cart = useSelector((state) => state.cart.value.products);

	const orderTotal = cart.reduce(
		(accumulator, product) => accumulator + product.price * product.quantity,
		0
	);

	return (
		<div className="flex justify-between items-center pt-4">
			<p className="text-lg font-semibold">Order Total</p>
			<p className="text-2xl font-bold text-custom-rose-900">${orderTotal}</p>
		</div>
	);
}
