import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Dropdown,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import firebase from 'firebase';
import foto from '../images/foto.jpg'
import logo from '../images/logo.png'
import '../styles/Head.css'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
  constructor(){
    super();
    this.state = { }
    this.handleItemClick=this.handleItemClick.bind(this);
  }

  handleItemClick (e, { name }) {
    this.setState({ activeItem: name })
    console.log(this.state.activeItem)
    
  }

  handleLogout() {
    firebase.auth().signOut()
          .then(function (result) {
           window.location = "/"
          })
          .catch(error => console.log(`Error ${error.code}: ${error.message}`)); 
    }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    const trigger = (
      <span>
        <Image src={foto} avatar/> Fleitas ezequiel
        <Icon name='dropdown' />
      </span>
    )

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Sidebar
          as={Menu}
          animation='overlay'
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <div className='menu'>
            <ul>
            <li className='menu-head'>       
              <a href="/">
                <img src={logo} alt='logo'/>
                <span className='menu-header'>Bienvenido</span>
              </a>      
            </li>
            <li>
              <a href="/main">
                <Icon name='print' size='large' color='teal' id='menu-items'>
                  <span>Imprimir</span>
                </Icon>
              </a>
            </li>
            <li>
              <a href="/pedidos">
                <Icon name='file outline' size='large' color='red' id='menu-items'>
                  <span>Pedidos</span>
                </Icon>
              </a>
            </li>
            <li>
              <a href="/contacto">
                <Icon name='mail outline' size='large' color='violet' id='menu-items'>
                  <span>Contacto</span>
                </Icon>
              </a>
            </li>
            <li>
              <a href="/test">
                <Icon name='book' size='large' color='black' id='menu-items' >
                  <span>Lectura</span>
                </Icon>
              </a>
            </li>
            </ul>
          </div>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign='center'
            style={{ padding: '0em 0em', marginBottom: '2em'}}
            vertical
          >
            <Container style={{ width: '100%'}}>
              <Menu secondary size='massive' style={{minHeight: '3.85714286em'}}>
                <Menu.Item onClick={this.handleToggle} style={{backgroundColor: '#fff'}}>
                    <Icon name='sidebar'/>
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Dropdown text={trigger} direction='left' pointing='top' icon={null} style={{padding: '0.9em 0.1em'}}>
                    <Dropdown.Menu>
                      <Dropdown.Item disabled>
                        <span>
                          Logueado como <strong>Fleitas ezequiel</strong>
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

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  handleLogout() {
    firebase.auth().signOut()
          .then(function (result) {
           window.location = "/"
          })
          .catch(error => console.log(`Error ${error.code}: ${error.message}`)); 
    }

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    const trigger = (
      <span>
        <Image src={foto} avatar/> Fleitas ezequiel
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
          <div className='menu'>
            <ul>
            <li className='menu-head'>       
              <a href="/">
                <img src={logo} alt='logo'/>
                <span className='menu-header'>Bienvenido</span>
              </a>      
            </li>
            <li>
              <a href="/main">
                <Icon name='print' size='large' color='teal' id='menu-items'>
                  <span>Imprimir</span>
                </Icon>
              </a>
            </li>
            <li>
              <a href="/pedidos">
                <Icon name='file outline' size='large' color='red' id='menu-items'>
                  <span>Pedidos</span>
                </Icon>
              </a>
            </li>
            <li>
              <a href="/contacto">
                <Icon name='mail outline' size='large' color='violet' id='menu-items'>
                  <span>Contacto</span>
                </Icon>
              </a>
            </li>
            <li>
              <a href="/test">
                <Icon name='book' size='large' color='black' id='menu-items' >
                  <span>Lectura</span>
                </Icon>
              </a>
            </li>
            </ul>
          </div>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign='center'
            style={{ padding: '0em 0em', marginBottom: '2em'}}
            vertical
          >
            <Container>
              <Menu secondary size='large'>
                <Menu.Item onClick={this.handleToggle} id='eventClick'>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Dropdown trigger={trigger} direction='left' pointing='top' icon={null} style={{padding: '0.9em 0.1em'}}>
                    <Dropdown.Menu>
                      <Dropdown.Item disabled>
                        <span>
                          Logueado como <strong>Fleitas ezequiel</strong>
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

const Head = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

Head.propTypes = {
  children: PropTypes.node,
}

export default Head;