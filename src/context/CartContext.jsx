import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

const fromLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || [];

function CartProvider({ children }) {
	const [cart, setCart] = useState(fromLocalStorage);
	const [count, setCount] = useState(0);

	useEffect(
		function () {
			localStorage.setItem('cartItems', JSON.stringify(cart));
		},
		[cart],
	);

	return (
		<CartContext.Provider value={{ cart, setCart, count, setCount }}>
			{children}
		</CartContext.Provider>
	);
}

function useCart() {
	const context = useContext(CartContext);
	if (context === undefined)
		throw new Error('CartContext is being used outside the CartProvider');
	return context;
}

export { CartProvider, useCart };
