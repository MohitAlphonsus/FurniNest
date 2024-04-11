import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import styles from './Rating.module.css';

function Rating({ rating }) {
	const ratingStars = Array.from({ length: 5 }, (_, i) => {
		return (
			<span key={i}>
				{rating >= i + 1 ? (
					<FaStar className={styles.icon} />
				) : rating >= i + 0.1 ? (
					<FaStarHalfAlt className={styles.icon} />
				) : (
					<FaRegStar className={styles.icon} />
				)}
			</span>
		);
	});

	return (
		<div className={styles.stars}>
			<span>({rating})</span>
			<div>{ratingStars}</div>
		</div>
	);
}

export default Rating;
