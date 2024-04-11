import styles from './Button.module.css';

function Button({ children, disabled, onClick }) {
	return (
		<button
			className={`${styles.btn} ${disabled ? styles.disable : ''}`}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
