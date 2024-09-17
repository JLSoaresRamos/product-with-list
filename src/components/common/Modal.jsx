import { GoCheckCircle } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../../features/cart/cartSlice";
import { close } from "../../features/modal/modalSlice";
import Button from "./Button";
import Orders from "../orders/Orders";
import TotalOrder from "./TotalOrder";

export default function Modal() {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.cart.value.products);
	const isOpen = useSelector((state) => state.modal.value.isOpen);

	const handleNewOrder = () => {
		dispatch(close());
		dispatch(clearAll());
	};

	return (
		<div
			className={`${
				isOpen ? "flex" : "hidden"
			} fixed bottom-0 w-full md:h-full md:bottom-auto md:inset-0 items-center justify-center bg-gray-300 bg-opacity-50`}
		>
			{/* Container do modal com scroll e margens ajustadas */}
			<div className="bg-white p-4 rounded-t-3xl md:rounded-3xl shadow-lg w-full md:max-w-md overflow-y-auto max-h-[90vh] space-y-4">
				{/* Cabeçalho (ícone + título) alinhado à esquerda */}
				<GoCheckCircle size={50} className="text-primary-green" />
				<div className="flex items-start space-x-4">
					<div>
						<p className="text-4xl font-bold text-custom-rose-900">
							Order Confirmed
						</p>
						<p className="text-gray-600">We hope you enjoy your food!</p>
					</div>
				</div>

				{/* Seção de pedidos */}
				<div className="space-y-4">
					<Orders orders={orders} />
				</div>

				{/* Total do pedido */}
				<TotalOrder />

				{/* Botão para começar um novo pedido */}
				<Button
					className="w-full py-3 text-center text-white bg-primary-red rounded-full"
					onClick={() => handleNewOrder()}
				>
					Start New Order
				</Button>
			</div>
		</div>
	);
}
