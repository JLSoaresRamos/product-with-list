import CakeIcon from "../../../public/assets/images/illustration-empty-cart.svg";

export default function Empty() {
	return (
		<div className="flex items-center justify-center flex-col">
			<img src={CakeIcon} alt="Pink Cake" />
			<p className="text-center">Your added items will be appear here</p>
		</div>
	);
}
