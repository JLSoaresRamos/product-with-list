import OrderProduct from "./OrderProduct";
import { v4 as uuidv4 } from "uuid";

export default function Orders({ orders }) {
	return (
		<div className="bg-custom-rose-100 overflow-y-auto h-64 rounded-lg">
			{orders.map((order) => (
				<OrderProduct
					key={uuidv4()}
					name={order.name}
					price={order.price}
					quantity={order.quantity}
					thumbnail={order.thumbnail}
				/>
			))}
		</div>
	);
}
