import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register/Register';
import Register2 from './components/Register/Register2';
import RegisterComplete from './components/Register/RegisterComplete';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Pizza from './components/Restaurants/Pizza/Pizza';
import Pizza2 from './components/Restaurants/Pizza/Pizza2';
import Pizza3 from './components/Restaurants/Pizza/Pizza3';
import Sushi from './components/Restaurants/Sushi/Sushi';
import Sushi2 from './components/Restaurants/Sushi/Sushi2';
import Sushi3 from './components/Restaurants/Sushi/Sushi3';
import Pasta from './components/Restaurants/Pasta/Pasta';
import Pasta2 from './components/Restaurants/Pasta/Pasta2';
import Pasta3 from './components/Restaurants/Pasta/Pasta3';
import Sandwich from './components/Restaurants/Sandwich/Sandwich';
import Sandwich2 from './components/Restaurants/Sandwich/Sandwich2';
import Sandwich3 from './components/Restaurants/Sandwich/Sandwich3';
import Indian from './components/Restaurants/Indian/Indian';
import Indian2 from './components/Restaurants/Indian/Indian2';
import Indian3 from './components/Restaurants/Indian/Indian3';
import Bbq from './components/Restaurants/Bbq/Bbq';
import Bbq2 from './components/Restaurants/Bbq/Bbq2';
import Bbq3 from './components/Restaurants/Bbq/Bbq3';
import SushiOrder from './components/Order/SushiOrder';
import PizzaOrder from './components/Order/PizzaOrder';
import SandwichOrder from './components/Order/SandwichOrder';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		city: '',
		occupation: '',
		food: ''
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<Switch>
				<Route
					exact={true}
					path="/"
					render={() => <Register value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/register2"
					render={() => <Register2 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route exact={true} path="/registercomplete" render={() => <RegisterComplete value={this.state} />} />

				<Route exact={true} path="/home" render={() => <Home value={this.state} food={this.state.food} />} />

				<Route
					exact={true}
					path="/profile"
					render={() => <Profile value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/pizza"
					render={() => <Pizza value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/pizza2"
					render={() => <Pizza2 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/pizza3"
					render={() => <Pizza3 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/sushi"
					render={() => <Sushi value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/sushi2"
					render={() => <Sushi2 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/sushi3"
					render={() => <Sushi3 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/pasta"
					render={() => <Pasta value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/pasta2"
					render={() => <Pasta2 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/pasta3"
					render={() => <Pasta3 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/sandwich"
					render={() => <Sandwich value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/sandwich2"
					render={() => <Sandwich2 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/sandwich3"
					render={() => <Sandwich3 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/indian"
					render={() => <Indian value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/indian2"
					render={() => <Indian2 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/indian3"
					render={() => <Indian3 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/bbq"
					render={() => <Bbq value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/bbq2"
					render={() => <Bbq2 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/bbq3"
					render={() => <Bbq3 value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/sushi/sushiorder"
					render={() => <SushiOrder value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/pizza/pizzaorder"
					render={() => <PizzaOrder value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>

				<Route
					exact={true}
					path="/restaurants/sandwich/sandwichorder"
					render={() => <SandwichOrder value={this.state} handleInput={this.handleInput.bind(this)} />}
				/>
			</Switch>
		);
	}
}

export default App;
