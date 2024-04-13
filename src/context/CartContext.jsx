import { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

const fromLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
	cart: fromLocalStorage,
	count: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART': {
			const { item } = action.payload;
			const existingItemIndex = state.cart.findIndex(
				cartItem => cartItem.id === item.id,
			);
			if (existingItemIndex >= 0) {
				const updatedCart = state.cart.map((cartItem, index) => {
					if (index === existingItemIndex) {
						return {
							...cartItem,
							quantity: cartItem.quantity + item.quantity,
						};
					}
					return cartItem;
				});
				return { ...state, cart: updatedCart };
			} else {
				return { ...state, cart: [...state.cart, item] };
			}
		}

		case 'DECREMENT':
			return {
				...state,
				count: state.count > 1 ? state.count - 1 : 1,
			};
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
			};
		case 'UPDATE_DECREASING_QUANTITY': {
			const { cartId, quantity } = action.payload;
			const updatedCart = state.cart.map(item => {
				if (item.id === cartId) {
					return {
						...item,
						quantity: quantity - 1,
					};
				}
				return item;
			});
			return { ...state, cart: updatedCart };
		}
		case 'UPDATE_INCREASING_QUANTITY': {
			const { cartId, quantity } = action.payload;
			const updatedCart = state.cart.map(item => {
				if (item.id === cartId) {
					return {
						...item,
						quantity: quantity + 1,
					};
				}
				return item;
			});
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
