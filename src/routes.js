import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App.js';
import Home from './components/Home.js';
import Register from './components/register.js';
import Main from './components/Main.js';
import Contact from './components/Contact.js';
import Orders from './components/Orders.js';
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