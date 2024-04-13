import styles from './Counter.module.css';
function Counter({ onDecrement, onIncrement, quantity }) {
	return (
		<div className={styles.counter}>
			<button onClick={onDecrement}>-</button>
			<span>{quantity}</span>
			<button onClick={onIncrement}>+</button>
		</div>
	);
}

export default Counter;
