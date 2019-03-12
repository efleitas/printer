import PropTypes from 'prop-types';
import React, { Component } from 'react';
import firebase from 'firebase';
import {Link} from 'react-router-dom'
import {Container,Dropdown, Icon, Menu, Responsive, Segment, Sidebar} from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
  constructor(){
    super();
    this.state = { 
      activeItem: 'Imprimir'
    }
    this.handleItemClick=this.handleItemClick.bind(this);
  }

  handleItemClick (e, { name }) {
    this.setState({ activeItem: name })
    console.log(this.state.activeItem)
    
  }

  handleLogout() {
    firebase.auth().signOut()
          .then(result => console.log(`${result.user.email} ha iniciado sesion`))
          .catch(error => console.log(`Error ${error.code}: ${error.message}`)); 
    }

  render() {
    const { children } = this.props

    const trigger = (
      <span>
        <Icon name='user'/> user.displayName
        <Icon name='dropdown' />
      </span>
    )

    const { activeItem } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Segment
            textAlign='center'
            style={{padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed
              pointing
              secondary
              size='large'
            >
              <Container>
                <Menu.Item name='Imprimir' active={activeItem === 'Imprimir'} onClick={this.handleItemClick}><Link to='/' style={{color: 'black'}}>Imprimir</Link></Menu.Item>
                <Menu.Item name='Mis pedidos' active={activeItem === 'Mis pedidos'} onClick={this.handleItemClick}><Link to='/pedido' style={{color: 'black'}}>Mis pedidos</Link></Menu.Item>
                <Menu.Item name='Contacto' active={activeItem === 'Contacto'} onClick={this.handleItemClick}><Link to='/contacto' style={{color: 'black'}}>Contacto</Link></Menu.Item>
                <Menu.Menu position='right'>
                  <Dropdown trigger={trigger} direction='left'  icon={null} style={{padding: '0.2em 0em'}} pointing='top right'>
                    <Dropdown.Menu>
                      <Dropdown.Item disabled>
                        <span>
                          Login with <strong>Fleitas ezequiel</strong>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item  icon='user' text='Mi perfil' />

                      <Dropdown.Item icon='settings'text='Configuraciones'/>
                
                      <Dropdown.Item icon='sign out'text='Desloguearse' onClick={this.handleLogout}/>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Menu>
              </Container>

            </Menu>
            
          </Segment>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  handleLogout() {
    firebase.auth().signOut()
          .then(result => console.log(`${result.user.email} ha iniciado sesion`))
          .catch(error => console.log(`Error ${error.code}: ${error.message}`)); 
    }

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    const trigger = (
      <span>
        <Icon name='user secret' /> Fleitas ezequiel
        <Icon name='dropdown' />
      </span>
    )

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='overlay'
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item></Menu.Item>
          <Menu.Item as='a' >Imprimir</Menu.Item>
          <Menu.Item as='a'>Mis pedidos</Menu.Item>
          <Menu.Item as='a'>Contacto</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            
            textAlign='center'
            style={{ minHeight: 250, padding: '1em 0em'}}
            vertical
          >
            <Container>
              <Menu  pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Dropdown trigger={trigger} direction='left'  icon={null} style={{padding: '0.2em 0em'}}>
                    <Dropdown.Menu>
                      <Dropdown.Item disabled>
                        <span>
                          Login with <strong>Fleitas ezequiel</strong>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item  icon='user' text='Mi perfil' />

                      <Dropdown.Item icon='settings'text='Configuraciones'/>
                
                      <Dropdown.Item icon='sign out'text='Desloguearse' onClick={this.handleLogout}/>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Menu>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    
  </ResponsiveContainer>
)
export default HomepageLayout