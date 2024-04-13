import { HiOutlineTrash } from 'react-icons/hi';
import { Counter } from '../components';
import { useCart } from '../context/CartContext';
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

	return (
		<div className={styles.cart}>
			<h2>Cart</h2>
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
									<button className={styles.delete}>
										<HiOutlineTrash className={styles.icon} />
										<span>delete</span>
									</button>
									<span className={styles.productTotalPrice}>
										{item.totalProductPrice}&#8377;
									</span>
								</div>
							</div>
						</div>
					))
				) : (
					<p>No items</p>
				)}
			</div>
		</div>
	);
}

export default Cart;
