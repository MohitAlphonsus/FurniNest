import { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

const fromLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
	cart: fromLocalStorage,
	count: 0,
	subTotal: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART': {
			const { item } = action.payload;
			const productPrice = item.price * item.quantity;
			const existingItemIndex = state.cart.findIndex(
				cartItem => cartItem.id === item.id,
			);
			if (existingItemIndex >= 0) {
				const updatedCart = state.cart.map((cartItem, index) => {
					if (index === existingItemIndex) {
						const newQuantity = cartItem.quantity + item.quantity;
						const newProductPrice = cartItem.price * newQuantity;
						return {
							...cartItem,
							quantity: newQuantity,
							totalProductPrice: newProductPrice,
						};
					}
					return cartItem;
				});
				return { ...state, cart: updatedCart };
			} else {
				const newItem = { ...item, totalProductPrice: productPrice };
				return { ...state, cart: [...state.cart, newItem] };
			}
		}

		case 'DECREMENT':
			return {
				...state,
				count: state.count > 1 ? state.count - 1 : 0,
			};
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
			};
		case 'UPDATE_DECREASING_QUANTITY': {
			const { cartId, quantity } = action.payload;
			const newQuantity = quantity - 1;
			const filteredCart = state.cart.filter(item => item.id !== cartId);
			const updatedCart = state.cart.map(item => {
				if (item.id === cartId) {
					const newTotalPrice = item.price * newQuantity;
					return {
						...item,
						quantity: newQuantity,
						totalProductPrice: newTotalPrice,
					};
				}
				return item;
			});

			return { ...state, cart: newQuantity === 0 ? filteredCart : updatedCart };
		}
		case 'UPDATE_INCREASING_QUANTITY': {
			const { cartId, quantity } = action.payload;
			const updatedCart = state.cart.map(item => {
				if (item.id === cartId) {
					const newQuantity = quantity + 1;
					const newTotalPrice = item.price * newQuantity;
					return {
						...item,
						quantity: newQuantity,
						totalProductPrice: newTotalPrice,
					};
				}
				return item;
			});
			return { ...state, cart: updatedCart };
		}
		case 'REMOVE_FROM_CART': {
			const { cartId } = action.payload;
			const updatedCart = state.cart.filter(item => item.id !== cartId);

			return { ...state, cart: updatedCart };
		}
	}
}

function CartProvider({ children }) {
	const [{ cart, count }, dispatch] = useReducer(reducer, initialState);

	useEffect(
		function () {
			localStorage.setItem('cartItems', JSON.stringify(cart));
		},
		[cart],
	);

	return (
		<CartContext.Provider value={{ cart, count, dispatch }}>
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
