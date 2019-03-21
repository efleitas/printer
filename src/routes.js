import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App.js';
import Home from './Home.js';
import Register from './components/Register.js';
import Main from './Main.js';
import Contact from './Contact.js';
import Orders from './Orders.js';
import Page404 from './components/Page404.js';
import Test from './components/Test.js';

const AppRoutes = () => 
	<App>
		<Switch>
			<Route path="/" exact strict component={Home} />
			<Route path="/registrado" exact strict component={Register} />
			<Route path="/main" exact strict component={Main} />
			<Route path="/pedidos" exact strict component={Orders} />
			<Route path="/contacto" exact strict component={Contact} />
			<Route path="/test"	exact strict component={Test} />
			<Route component={Page404} />			
		</Switch>
	</App>;

export default AppRoutes;