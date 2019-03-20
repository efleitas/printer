import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import firebase from 'firebase';
import {Link} from 'react-router-dom'
import Documents from './Documents.js'
import {files} from 'C:/Users/Ezequiel/printer/src/files.json'

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
        <Icon name='user circle' size='large' color='black'/> Fleitas ezequiel
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
          <Menu.Item> </Menu.Item>
          <Menu.Item><Link to='/main' style={{color: 'black'}}>Imprimir</Link></Menu.Item>
          <Menu.Item><Link to='/pedidos' style={{color: 'black'}}>Mis pedidos</Link></Menu.Item>
          <Menu.Item><Link to='/contacto' style={{color: 'black'}}>Contacto</Link></Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign='center'
            style={{ padding: '0em 0em', marginBottom: '2em'}}
            vertical
          >
            <Container style={{ width: '100%'}}>
              <Menu pointing secondary size='massive' >
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar'/>
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Dropdown text={trigger} direction='left' pointing='top' icon={null} style={{paddingTop: '10px'}}>
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
        <Icon name='user circle' size='large' color='black' /> Fleitas ezequiel
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
          <Menu.Item> </Menu.Item>
          <Menu.Item><Link to='/main' style={{color: 'black'}}>Imprimir</Link></Menu.Item>
          <Menu.Item><Link to='/pedidos' style={{color: 'black'}}>Mis pedidos</Link></Menu.Item>
          <Menu.Item><Link to='/contacto' style={{color: 'black'}}>Contacto</Link></Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign='center'
            style={{ padding: '0em 0em', marginBottom: '2em'}}
            vertical
          >
            <Container>
              <Menu  pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Dropdown trigger={trigger} direction='left' pointing='top' icon={null} style={{paddingTop: '10px'}}>
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

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

class Main extends Component {
  constructor() {
    super();
    this.state = {
      files
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.removeFile=this.removeFile.bind(this);
  }

  handleAddTask(file) {
    this.setState({
      files: [...this.state.files, file]
    })
    
  }

  removeFile(index) {
    if (window.confirm('Esta seguro que desea quitar el archivo?')) {
      this.setState ({
        files: this.state.files.filter( (e,i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    const files=this.state.files.map ((file, i) => {
      return (
        <div key={i}>
          <Segment color='red' style={{margin: '0.5em'}}>
            <div >
              <h3>{file.title}</h3>
              <span>{file.priority}</span>
            </div>

            <div>
              <p>{file.description}</p>
            </div>

            <div>
              <Button color='red' onClick={this.removeFile.bind(this, i)}>
              Delete
              </Button>
            </div>
          </Segment>
        </div>
      )
    })

    return(
      <ResponsiveContainer>
          <Documents onAddFile={this.handleAddTask} cantidad={this.state.files.length}></Documents>
            <Segment.Group style={{width:'80%', margin: '2em auto', borderColor:'grey'}}>
              {files}
            </Segment.Group>
        <Segment inverted vertical style={{ padding: '5em 0em'}}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>

      )
  }
}
  
export default Main;