import { HiOutlineTrash } from 'react-icons/hi';
import { Counter, TotalPrice } from '../components';
import { useCart } from '../context/CartContext';
import { FaOpencart } from 'react-icons/fa';
import styles from './Cart.module.css';

function Cart() {
	const { cart, dispatch } = useCart();

	function updateQuantityDecrementHandler(id, cartQuantity) {
		dispatch({
			type: 'UPDATE_DECREASING_QUANTITY',
			payload: { cartId: id, quantity: cartQuantity },
		});
	}

	function updateQuantityIncrementHandler(id, cartQuantity) {
		dispatch({
			type: 'UPDATE_INCREASING_QUANTITY',
			payload: { cartId: id, quantity: cartQuantity },
		});
	}

	function deleteFromCartHandler(id) {
		dispatch({ type: 'REMOVE_FROM_CART', payload: { cartId: id } });
	}

	return (
		<div className={styles.cart}>
			<h2>Shopping Cart</h2>
			<div className={styles.cartContainer}>
				<div className={styles.cartItems}>
					{cart.length > 0 ? (
						cart.map(item => (
							<div className={styles.cartItem} key={item.id}>
								<div
									className={styles.cartItemImg}
									style={{ backgroundImage: `url(${item.img})` }}
								>
									&nbsp;
								</div>
								<div className={styles.info}>
									<h4 className={styles.title}>{item.name}</h4>
									<div className={styles.stockPrice}>
										<span>{item.price}&#8377;</span>

										<span>In Stock</span>
									</div>
									<div className={styles.actions}>
										<Counter
											onDecrement={() =>
												updateQuantityDecrementHandler(item.id, item.quantity)
											}
											onIncrement={() =>
												updateQuantityIncrementHandler(item.id, item.quantity)
											}
											quantity={item.quantity}
										/>
										<button
											className={styles.delete}
											onClick={() => deleteFromCartHandler(item.id)}
										>
											<HiOutlineTrash className={styles.icon} />
										</button>
										<span className={styles.productTotalPrice}>
											{item.totalProductPrice}&#8377;
										</span>
									</div>
								</div>
							</div>
						))
					) : (
						<div className={styles.noCart}>
							<FaOpencart className={styles.noCartIcon} />
							<span>Add to Cart</span>
						</div>
					)}
				</div>
				{cart.length > 0 && <TotalPrice />}
			</div>
		</div>
	);
}

export default Cart;
