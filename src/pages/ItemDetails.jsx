import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Counter, Rating } from '../components';
import { furnitureData } from '../../data/furniture-data';

import styles from './ItemDetails.module.css';
import { useCart } from '../context/CartContext';

function ItemDetails() {
	const { itemId } = useParams();
	const { description, images, inTheBox, itemWeigth, name, price, rating } =
		furnitureData.filter(furniture => furniture.id === itemId)[0];
	const [imageSrc, setImageSrc] = useState(images[0].imgSrc);

	const { count, dispatch } = useCart();
	function countDecrementHandler() {
		dispatch({ type: 'DECREMENT' });
	}

	function countIncrementHandler() {
		dispatch({ type: 'INCREMENT' });
	}

	function addToCartHandler() {
		const cartItem = {
			id: itemId,
			img: images[0].imgSrc,
			name,
			price,
			quantity: count,
		};
		dispatch({ type: 'ADD_TO_CART', payload: { item: cartItem } });
	}

	return (
		<div className={styles.details}>
			<div className={styles.imageContainer}>
				<div
					className={styles.mainImage}
					style={{ backgroundImage: `url(${imageSrc})` }}
				></div>
				<div className={styles.otherImages}>
					{images.map(img => (
						<div
							className={styles.image}
							key={img.id}
							style={{ backgroundImage: `url(${img.imgSrc})` }}
							onClick={() => setImageSrc(img.imgSrc)}
						>
							&nbsp;
						</div>
					))}
				</div>
			</div>
			<div className={styles.content}>
				<h4>{name}</h4>
				<Rating rating={rating} />
				<p>{description}</p>
				<div className={styles.misc}>
					<div className={styles.inBox}>
						{inTheBox.map(inb => (
							<span key={Math.random().toString()}>{inb}</span>
						))}
					</div>
					<span>{itemWeigth}</span>
				</div>
				<span className={styles.price}>{price}&#8377;</span>
				<Counter
					onDecrement={countDecrementHandler}
					onIncrement={countIncrementHandler}
					quantity={count}
				/>
				<Button onClick={addToCartHandler} disabled={count === 0}>
					Add To Cart
				</Button>
			</div>
		</div>
	);
}

export default ItemDetails;
