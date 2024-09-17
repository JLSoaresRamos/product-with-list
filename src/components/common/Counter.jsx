import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

export default function Counter({ onIncrement, quantity, onDecrement }) {
	return (
		<div className="bg-primary-red text-custom-rose-50 flex justify-center p-2 rounded-full min-w-40">
			<div className="flex items-center justify-between w-full">
				<button aria-label="Increment product" onClick={onIncrement}>
					<AiOutlinePlusCircle size={25} />
				</button>
				<span>{quantity}</span>
				<button aria-label="Decrement product" onClick={onDecrement}>
					<AiOutlineMinusCircle size={25} />
				</button>
			</div>
		</div>
	);
}
