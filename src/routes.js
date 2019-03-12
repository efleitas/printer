import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App.js';
import Home from './components/Home.js';
import Register from './components/register.js'
import Main from './components/Main.js';
import Contact from './components/Contact.js'
import Orders from './components/Orders.js'
import Page404 from './components/Page404.js'

const AppRoutes = () => 
	<App>
		<Switch>
			<Route path="/pedido" component={Orders} />
			<Route path="/contacto" component={Contact} />
			<Route path="/main" component={Main} />
			<Route path="/registrado" component={Register} />
			<Route path="/" component={Home} />
			<Route component={Page404} />
		</Switch>
	</App>;

export default AppRoutes;