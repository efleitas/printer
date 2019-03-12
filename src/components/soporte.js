import React, { Component } from 'react';

import { Button, Container, Dropdown, Grid, Header, Icon, Image, Menu, Segment} from 'semantic-ui-react';

import firebase from 'firebase';

import './StylesHead.css';

class Head extends Component {
	constructor(){
		super();
		this.state = { 
			activeItem: 'imprimir'
		}
		this.handleItemClick=this.handleItemClick.bind(this);
	}

	handleLogout() {
		firebase.auth().signOut()
	        .then(result => console.log(`${result.user.email} ha iniciado sesion`))
	        .catch(error => console.log(`Error ${error.code}: ${error.message}`)); 
  	}

  	handleItemClick (e, { name }) {
		this.setState({ activeItem: name })
		console.log(this.state.activeItem)
		
	}


  render() {

  	const { activeItem } = this.state

  	const trigger = (
		  <span>
		    <Image avatar src={this.props.photo} circular size='mini' verticalAlign='middle' center/>
		    {this.props.name}
		    <Icon name='dropdown' />
		  </span>
		)
    
    return (
	    <Menu secondary pointing style={{height: '100%', width: '100%'}}>
          <Menu.Item name='imprimir' active={activeItem === 'imprimir'} onClick={this.handleItemClick} style={{marginLeft : '2em', height: '100%'}}/>
          <Menu.Item
            name='pedidos'
            active={activeItem === 'pedidos'}
            onClick={this.handleItemClick}
            style={{height: '100%'}}
          />
          <Menu.Item
            name='contacto'
            active={activeItem === 'contacto'}
            onClick={this.handleItemClick}
            style={{height: '100%'}}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
				<Dropdown trigger={trigger} icon={this.props.photo}>
	        		<Dropdown.Menu>
	        			<Dropdown.Item disabled>
	        				<span>
						        Login with <strong>{this.props.name}</strong>
						    </span>
						</Dropdown.Item>
						<Dropdown.Item  icon='user' text='profile' />

						<Dropdown.Item icon='settings'text='settings'/>
			
						<Dropdown.Item icon='sign out'text='Sign out' onClick={this.handleLogout}/>
							
	        		</Dropdown.Menu>
	        	</Dropdown>
			</Menu.Item>
          </Menu.Menu>
    	</Menu>
		
    );
  }
}

export default Head;

	<Segment>
        <Grid divided stackable>
          <Grid.Column width={6} >
            {this.renderPage()}
          </Grid.Column>
          <Grid.Column width={10}>
            
          </Grid.Column>
        </Grid>
      </Segment>