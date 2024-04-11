import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Shop, ItemDetails, Cart } from './pages';

import { CartProvider } from './context/CartContext';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/details/:itemId" element={<ItemDetails />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
