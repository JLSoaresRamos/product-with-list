export default function ProductInfo({ name, category, price }) {
	return (
		<div>
			<p className="text-sm">{category}</p>
			<p className="font-semibold text-custom-rose-900">{name}</p>
			<p className="text-primary-red font-medium">${price}</p>
		</div>
	);
}
