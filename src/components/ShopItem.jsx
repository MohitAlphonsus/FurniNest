import { useNavigate } from 'react-router-dom';
import styles from './ShopItem.module.css';

function ShopItem({ imageSrc, name, price, itemId }) {
	const navigate = useNavigate();

	return (
		<div
			className={styles['shop-item']}
			onClick={() => navigate(`/details/${itemId}`)}
		>
			<div
				className={styles['shop-item-image']}
				style={{ backgroundImage: `url(${imageSrc})` }}
			>
				&nbsp;
			</div>
			<div className={styles['shop-item-content']}>
				<h4>{name}</h4>
				<span>{price}&#8377;</span>
			</div>
		</div>
	);
}

export default ShopItem;
