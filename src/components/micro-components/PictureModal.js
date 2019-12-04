import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Raiting from '../micro-components/Raiting';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'relative',
		width: 1200,
		height: 500,
		textAlign: 'center',
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

export default function SimpleModal(props) {
	const classes = useStyles();
	const [ modalStyle ] = React.useState(getModalStyle);
	const [ open, setOpen ] = React.useState(false);
	const [ price, setPrice ] = React.useState(props.price);
	const [ quantity, setQuantity ] = React.useState(1);


	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleMinus = () => {
		if (quantity > 1) {
			setPrice(price - props.price);
			setQuantity(quantity - 1);
		}
	};

	const handlePlus = () => {
		setPrice(price + price);
		setQuantity(quantity + 1);
	};

	const handleCart = () => {
		props.handleCart(props.foodName,price,quantity);
		// setCart([...cart,{name : props.foodName, price :price , quantity:quantity }])
		handleClose();
		setPrice(props.price);
		setQuantity(1);
	}

	return (
		<div>
			<img src={props.image} onClick={handleOpen} alt="" className="menu-item-image" />
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
			>
				<div style={modalStyle} className={classes.paper}>
					<h1 id="simple-modal-title">{props.foodName}</h1>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<img src={props.image} className="menu-item-image-open" alt="" />
						</Grid>
						<Grid item xs={6}>
							<h4>Ingredients</h4>
							<hr />
							<Grid container spacing={3}>
								<Grid item xs={6}>
									{props.ingridientListOne.map((ingridient,index) => (
										<li style={{ margin: '1rem' }} key={index}>{ingridient}</li>
									))}
								</Grid>
								<Grid item xs={6}>
									{props.ingridientListTwo.map((ingridient,index) => (
										<li style={{ margin: '1rem' }} key={index}>{ingridient}</li>
									))}
								</Grid>
							</Grid>
							<hr />
							<p style={{ fontSize: '30px', fontFamily: 'Lato'}}>
								<Grid container spacing={1}>
									<Grid item xs={4}>
										<Fab style={{ backgroundColor: '#0074D9' }} onClick={handleMinus}>
											<RemoveIcon style={{ color: 'white' }} />
										</Fab>
									</Grid>
									<Grid item xs={4}>
										Quantity : {quantity}
									</Grid>
									<Grid item xs={4}>
										<Fab style={{ backgroundColor: '#0074D9' }} onClick={handlePlus}>
											<AddIcon style={{ color: 'white' }} />
										</Fab>
									</Grid>
								</Grid>
							</p>
							<span style={{ fontSize: '30px' }}>Price : {price}.00 RSD</span>
							<Grid container spacing={1}>
								<Grid item xs={6}>
									<Raiting value={props.raitingValue} />
								</Grid>
								<Grid item xs={6}>
									<Fab variant="extended" onClick={handleCart}>
										<ShoppingCartIcon />
										Add to cart
									</Fab>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Modal>
		</div>
	);
}

SimpleModal.defaultProps = {
	ingridientListOne: [ 'ingridient1prop', 'ingridient1prop', 'ingridient1prop' ],
	ingridientListTwo: [ 'ingridient2prop', 'ingridient2prop', 'ingridient2prop' ],
	price: 300
};
