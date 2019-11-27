import React from 'react';
import PictureModal from '../micro-components/PictureModal';
import Raiting from '../micro-components/Raiting';

const MenuItem = (props) => {
	return (
		<div className="menu-item-container" >
			<div className="menu-item-box">
				<h4>{props.title}</h4>
				<PictureModal
					image={props.image}
					foodName={props.title}
					raitingValue={props.raitingValue}
					handleCart={props.handleCart}
					price={props.price}
					ingridientListOne={props.ingredients1}
					ingridientListTwo={props.ingredients2}
				/>
				<Raiting value={props.raitingValue} />
			</div>
		</div>
	);
};

MenuItem.defaultProps = {
	title: 'Title Props',
	price: 250
};

export default MenuItem;
