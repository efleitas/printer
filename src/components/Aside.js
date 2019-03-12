import React, { Component } from 'react';

import { Button, Container, Dropdown, Grid, Header, Icon, Image, Menu, Segment } from 'semantic-ui-react';

class Aside extends Component {
	constructor(){
		super();
		this.state = { activeItem: 'home'}
		this.handleItemClick=this.handleItemClick.bind(this);
	}

	handleItemClick (e, { name }) {
		this.setState({ activeItem: name })
		console.log(this.state.activeItem)	
	} 


  render() {
    const { activeItem } = this.state
    
    return (
      	<Menu fluid vertical tabular>
	        <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
	        <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
	        <Menu.Item
	          name='companies'
	          active={activeItem === 'companies'}
	          onClick={this.handleItemClick}
	        />
	        <Menu.Item
	          name='links'
	          active={activeItem === 'links'}
	          onClick={this.handleItemClick}
	        />
	    </Menu>
    );
  }
}

export default Aside;