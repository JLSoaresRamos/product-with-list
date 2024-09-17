import Product from "./Product";

import data from "../../../public/data.json";

export default function Products() {
	return (
		<section>
			<div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{data.map((product) => (
					<Product
						key={product.name}
						category={product.category}
						illustrationUrls={product.image}
						name={product.name}
						price={product.price}
					/>
				))}
			</div>
		</section>
	);
}
