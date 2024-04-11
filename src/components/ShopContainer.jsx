import styles from './ShopContainer.module.css';
import { furnitureData } from '../../data/furniture-data';
import { ShopItem } from '../components';

function ShopContainer() {
	return (
		<div className={styles['shop-container']}>
			{furnitureData.map(data => (
				<ShopItem
					key={data.id}
					itemId={data.id}
					imageSrc={data.images[0].imgSrc}
					name={data.name}
					price={data.price}
				/>
			))}
		</div>
	);
}

export default ShopContainer;
