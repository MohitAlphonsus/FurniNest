import { ShopContainer } from '../components';
import styles from './Shop.module.css';

function Shop() {
	return (
		<section className={styles['section-shop']}>
			<ShopContainer />
		</section>
	);
}

export default Shop;
