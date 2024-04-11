import {
	product_1_main,
	product_1_view,
	product_1_chair_view,
	product_1_table_view,
} from './assets/product-1';
import {
	product_2_main,
	product_2_onWall,
	product_2_dim_view,
} from './assets/product-2';
import {
	product_3_main,
	product_3_view,
	product_3_empty_view,
	product_3_dim_view,
} from './assets/product-3';
import {
	product_4_main,
	product_4_view,
	product_4_open_view,
	product_4_dim_view,
} from './assets/product-4';
import {
	product_5_main,
	product_5__close_up_view,
	product_5_leg_rest_view,
	product_5_pcoket_view,
} from './assets/product-5';
import {
	product_6_main,
	product_6_view,
	product_6__drawer_view,
	product_6_latch_view,
} from './assets/product-6';

const furnitureData = [
	{
		id: 'prod$_01',
		name: 'Coffee Chair Table Set',
		description:
			'Garden furniture set having chairs with cushions for each and a table with glass on top and comes with the size of (30 Inch X 30 Inch).',
		inTheBox: ['Table 1', 'Chair 4'],
		rating: 3.5,
		price: 15000,
		InStock: true,
		itemWeigth: '20Kg',
		images: [
			{ id: 0, imgSrc: product_1_main },
			{ id: 1, imgSrc: product_1_view },
			{ id: 2, imgSrc: product_1_chair_view },
			{ id: 3, imgSrc: product_1_table_view },
		],
	},
	{
		id: 'prod$_02',
		name: 'Wooden Wall Shelf',
		description:
			'This is a 3 Tier Shelf made up of Laminated Engineered Wood which is scratch resistant, easy to clean. It gives a stylish matte look. It has a classy brown colour that will match with any background.',
		inTheBox: ['Hardware', 'Assembly Instructions'],
		rating: 4.2,
		price: 500,
		InStock: true,
		itemWeigth: '1.7Kg',
		images: [
			{ id: 0, imgSrc: product_2_main },
			{ id: 1, imgSrc: product_2_onWall },
			{ id: 2, imgSrc: product_2_dim_view },
		],
	},
	{
		id: 'prod$_03',
		name: 'Wooden Showcase Organizer',
		description:
			'Large storage bookcase featuring six open shelving spaces and provides ample space for placing and organizing your books, plants, and collections.',
		inTheBox: ['6 Layer book case'],
		rating: 4.0,
		price: 2800,
		InStock: true,
		itemWeigth: '9.7Kg',
		images: [
			{ id: 0, imgSrc: product_3_main },
			{ id: 1, imgSrc: product_3_view },
			{ id: 2, imgSrc: product_3_empty_view },
			{ id: 3, imgSrc: product_3_dim_view },
		],
	},
	{
		id: 'prod$_04',
		name: 'Mini Storage Cabinet',
		description:
			'Made of 100% virgin plastic, provides the ultimate strength and durability to the product, safe and non-toxic, highest quality of plastic is used with rigorous safety tests, high load bearing capacity quick and easy to assemble.',
		inTheBox: ['Storage unit'],
		rating: 4.1,
		price: 2100,
		InStock: true,
		itemWeigth: '6Kg',
		images: [
			{ id: 0, imgSrc: product_4_main },
			{ id: 1, imgSrc: product_4_view },
			{ id: 2, imgSrc: product_4_open_view },
			{ id: 3, imgSrc: product_4_dim_view },
		],
	},
	{
		id: 'prod$_05',
		name: 'Ultra Soft Leatherette Bean Bag',
		description:
			'This bean bag is a space-saving seating option, especially in small living spaces or apartments where bulky furniture may not fit comfortably. This bean bag is designed according to your body shape, providing a comfortable and cozy sitting experience.',
		inTheBox: ['Beans Bag Cover', 'Footstool Cover', 'Cushion Cover'],
		rating: 3.5,
		price: 950,
		InStock: true,
		itemWeigth: '1Kg',
		images: [
			{ id: 0, imgSrc: product_5_main },
			{ id: 1, imgSrc: product_5__close_up_view },
			{ id: 2, imgSrc: product_5_leg_rest_view },
			{ id: 3, imgSrc: product_5_pcoket_view },
		],
	},
	{
		id: 'prod$_06',
		name: 'Wall Mounted Table',
		description:
			'Solid Wall Mounted Folding round corner Study Table is an incredible space-saver folding table. This sturdy and durable folding shelf wall mounted table, wall mount foldable table is multi-functional folding wall shelf, convenient to use, and stylish.',
		inTheBox: ['Table Hardware', 'Skrews', 'Assembly Instructions'],
		rating: 5.0,
		price: 2700,
		InStock: true,
		itemWeigth: '4Kg',
		images: [
			{ id: 0, imgSrc: product_6_main },
			{ id: 1, imgSrc: product_6_view },
			{ id: 2, imgSrc: product_6__drawer_view },
			{ id: 3, imgSrc: product_6_latch_view },
		],
	},
];

export { furnitureData };
