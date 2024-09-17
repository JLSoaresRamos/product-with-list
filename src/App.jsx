import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import Modal from "./components/common/Modal";
import Title from "./components/common/Title";

function App() {
	return (
		<>
			<main className="p-5 space-y-4">
				<Title>Desserts</Title>
				<div className="grid sm:grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
					<Products />
					<Cart />
				</div>
			</main>
			<Modal />
		</>
	);
}

export default App;
