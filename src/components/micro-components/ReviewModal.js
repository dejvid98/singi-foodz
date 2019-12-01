import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RaitingFood from './RaitingFood';
import RaitingDelivery from './RaitingDelivery';
import RaitingMenu from './RaitingMenu';


const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2)
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		width: '35rem'
	}
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1)
	}
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
	const [ open, setOpen ] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
        setOpen(false);
        props.handleReview();
	};

	return (
		<div>
			<Button variant="outlined" color="secondary" onClick={handleClickOpen}>
				See details
			</Button>
			<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					Please review your order!
				</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<h5>Restaurant :</h5>
							</Grid>
							<Grid item xs={6}>
								<h5>{props.restaurant}</h5>
							</Grid>
						</Grid>
					</Typography>

					<Typography gutterBottom>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<h5>Date :</h5>
							</Grid>
							<Grid item xs={6}>
								<h5>{props.date}</h5>
							</Grid>
						</Grid>
					</Typography>

					<Typography gutterBottom>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<h5>Food :</h5>
							</Grid>
							<Grid item xs={6}>
								<h5>{props.name}</h5>
							</Grid>
						</Grid>
					</Typography>

					<Typography gutterBottom>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<h5>Quantity :</h5>
							</Grid>
							<Grid item xs={6}>
								<h5>{props.quantity}</h5>
							</Grid>
						</Grid>
					</Typography>

					<Typography gutterBottom>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<h5>Price :</h5>
							</Grid>
							<Grid item xs={6}>
								<h5>{props.price}</h5>
							</Grid>
						</Grid>
					</Typography>

					<Typography gutterBottom>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<h5>Food Taste :</h5>
							</Grid>
							<Grid item xs={6}>
								<RaitingFood />
							</Grid>
						</Grid>
					</Typography>

					<Typography gutterBottom>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<h5>Delivery Time :</h5>
							</Grid>
							<Grid item xs={6}>
								<RaitingDelivery />
							</Grid>
						</Grid>
					</Typography>

					<Typography gutterBottom>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<h5>Menu Options :</h5>
							</Grid>
							<Grid item xs={6}>
								<RaitingMenu />
							</Grid>
						</Grid>
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
						Save changes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
