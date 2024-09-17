import { useDispatch } from "react-redux";
import { RiTreeLine } from "react-icons/ri";

import { open } from "../../features/modal/modalSlice";

import Button from "../common/Button";
import TotalOrder from "../common/TotalOrder";

export default function CartFooter() {
	const dispatch = useDispatch();

	const hadleOrderRequest = () => {
		dispatch(open());
	};

	return (
		<div>
			<TotalOrder />
			<div className="text-center bg-custom-rose-100 rounded-lg mt-4 flex items-center p-4 justify-center md:flex-wrap md:p-0 lg:flex-nowrap lg:p-2">
				<RiTreeLine size={25} className="text-primary-green" />
				<p>
					This is a <strong>carbon-neutral </strong>delivery
				</p>
			</div>
			<div className="flex justify-center mt-4">
				<Button onClick={() => hadleOrderRequest()}>Confirm Order</Button>
			</div>
		</div>
	);
}
