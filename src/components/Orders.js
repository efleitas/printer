import React, { Component } from 'react'

import { Dropdown, Image, Menu} from 'semantic-ui-react'

import firebase from 'firebase'

import Body from 'C:/Users/Ezequiel/printer/src/components/Body.js'
import Footer from 'C:/Users/Ezequiel/printer/src/components/Footer.js'

import {Link} from 'react-router-dom'


class Head extends Component {
  constructor(){
    super();
    this.state = { 
      activeItem: 'Mis pedidos'
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
        <Image src='C:/Users/Ezequiel/Desktop/printer.png' avatar/>
        Fleitas ezequiel
      </span>
    )
    
    return (
      <div>
        <Menu secondary pointing style={{ width: '100%'}}>
          <Menu.Item name='imprimir' active={activeItem === 'imprimir'} onClick={this.handleItemClick} style={{marginLeft : '2em', height: '100%'}}>
          <Link to='/main' style={{color: 'black'}}>Imprimir</Link></Menu.Item>
          <Menu.Item
            name='Mis pedidos'
            active={activeItem === 'Mis pedidos'}
            onClick={this.handleItemClick}
            style={{height: '100%'}}
          ><Link to='/pedido' style={{color: 'black'}}>Mis pedidos</Link></Menu.Item>
          <Menu.Item
            name='contacto'
            active={activeItem === 'contacto'}
            onClick={this.handleItemClick}
            style={{height: '100%'}}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Dropdown trigger={trigger}>
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
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Head;