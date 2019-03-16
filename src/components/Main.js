import React, { Component } from 'react';
import Head from './Head.js';
import Body from './Body.js';
import Footer from './Footer.js';


class Main extends Component {
	
  render() {
    
    return (
    	<div>
			<Head />
			<Body />
	    	<Footer />	    
	   	</div>
	)	      	
  }
}

export default Main;