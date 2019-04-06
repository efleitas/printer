import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import logo from '../images/logo.png'
import '../styles/Menubar.css'

class Menubar extends Component {
  	render() {

    return (
		<div className="vertical-nav">
		  <ul>
			<li className='head'>				
				<a href="/">
					<img src={logo} alt='logo'/>
					<span className='header'>Bienvenido</span>
				</a>			
			</li>
			<li>
				<a href="/main">
					<Icon name='print' size='large' color='teal' id='items'>
						<span>Imprimir</span>
					</Icon>
				</a>
			</li>
			<li>
				<a href="/pedidos">
					<Icon name='file outline' size='large' color='red' id='items'>
						<span>Pedidos</span>
					</Icon>
				</a>
			</li>
			<li>
				<a href="/contacto">
					<Icon name='mail outline' size='large' color='violet' id='items'>
						<span>Contacto</span>
					</Icon>
				</a>
			</li>
			<li>
				<a href="/test">
					<Icon name='book' size='large' color='black' id='items' >
						<span>Lectura</span>
					</Icon>
				</a>
			</li>
		  </ul>
		</div>
    );
  }
}

export default Menubar;