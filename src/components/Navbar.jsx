import { GiWoodPile } from 'react-icons/gi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import styles from './Navbar.module.css';

function Navbar() {
	const { cart } = useCart();
	return (
		<nav className={styles.navbar}>
			<NavLink className={styles.logo} to="/">
				<GiWoodPile />
			</NavLink>
			<ul className={styles['link-list']}>
				<li>
					<NavLink className={styles.link} to="/">
						Shop
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/cart">
						<HiOutlineShoppingCart className={styles['nav-link-icon']} />
						<span>{cart.length}</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
