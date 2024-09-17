export default function OrderProduct({ name, quantity, price, thumbnail }) {
	return (
		<div className="flex p-4 border-b justify-between items-center">
			<div className="flex">
				<img src={thumbnail} alt={name} />
				<div className="w-36 mr-8 ml-4">
					<p className="truncate text-custom-rose-900 font-medium">{name}</p>
					<div className="flex gap-4">
						<p className="text-primary-red font-medium">{quantity}x</p>
						<p>
							<span>@</span>${price}
						</p>
					</div>
				</div>
			</div>
			<p className="font-bold text-custom-rose-900">${quantity * price}</p>
		</div>
	);
}
