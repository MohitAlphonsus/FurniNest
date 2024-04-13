import styles from './Button.module.css';

function Button({ children, disabled, onClick, className }) {
	return (
		<button
			className={`${styles.btn} ${disabled ? styles.disable : ''} ${className}`}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
