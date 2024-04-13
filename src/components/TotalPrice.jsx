import styles from './TotalPrice.module.css';
import { useCart } from '../context/CartContext';
import Button from './Button';

function TotalPrice() {
	const { cart } = useCart();

	const subTotalOfProducts = cart.reduce(
		(acc, item) => acc + item.totalProductPrice,
		0,
	);

	return (
		<div className={styles.totalPrice}>
			<h3>Delivery</h3>
			<div className={styles.group}>
				<span>Subtotal</span>
				<span>{subTotalOfProducts}&#8377;</span>
			</div>
			<div className={styles.group}>
				<span>Shipping</span>
				<span>Free</span>
			</div>
			<Button className={styles.btnCheckout}>Checkout</Button>
		</div>
	);
}

export default TotalPrice;
