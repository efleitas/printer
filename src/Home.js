//Dependencies
import React, { Component } from 'react'
import { Button, Divider, Form, Grid, Header, Label, Message, Segment, Icon } from 'semantic-ui-react'
import firebase from 'firebase'
import Main from './Main.js'
import './styles/Home.css'

class Inicio extends Component {
  	constructor() {
    super();
    this.state = {
      user: null,
      value:null
    }
    this.handleAuth=this.handleAuth.bind(this);
    this.renderRegister=this.renderRegister.bind(this);
    this.renderLogin=this.renderLogin.bind(this);
  }
  
  //set login state
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState( {
        user: user
      });
    })
  }

  handleAuth () {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider)
        .then(function (result) {
          return console.log(`${result.user.email} ha iniciado sesion`)
        })//dentro de la consola imprime el mail y ese comentario
        .catch(function (error) {
          return console.log(`Error ${error.code}: ${error.message}`)
        })
        //lo que esta dentro del catch es la forma resumida de lo que esta dentro del then
    }

  redirectRegister() {
    window.location = "/registrado";
  }

  redirectLogin() {
    window.location = "/main";
  }

  renderRegister() {
    this.setState( {
      value: "notRegistered"
    })
  }

  renderLogin() {
    this.setState( {
      value: null
    })
  }


  renderPage() {
      //Si esta login
      if (this.state.user) {
        return (
          <div>
            <Main />
          </div>
          )
      } else {
        //Sino esta login
        //Sino esta registrado
        if (this.state.value) {
          return(
            <div>
              <Header as='h2' textAlign='center'>
                Registrate
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid placeholder='Nombre' />
                  <Form.Input
                    fluid
                    placeholder='Apellido'
                  />
                  <Form.Input
                    fluid
                    placeholder='Correo electrónico'
                  />
                  <Form.Field>
                    <input type='password'placeholder='Contraseña' />
                    <Label pointing>La contraseña debe tener 8 caracteres como mínimo.</Label>
                  </Form.Field>
                  <Form.Input
                    fluid
                    placeholder='Repetir contraseña'
                    type='password'
                  />
                  <Form.Field>
                    <Button fluid size='large' color='grey' onClick={this.redirectRegister}>
                      Registrarse
                    </Button>
                  </Form.Field>
                  <Form.Field>
                    <Button color='google plus' fluid size='large' onClick={this.handleAuth}>
                      <Icon name='google plus' /> Registrarse con cuenta de Google
                    </Button>
                  </Form.Field>
                  <Form.Field>
                    <Button color='facebook' fluid size='large'>
                      <Icon name='facebook' /> Registrarse con cuenta de Facebook
                    </Button>
                  </Form.Field>
                  </Segment>
              </Form>
              <Message>
                Ya posees una cuenta? 
                <button onClick={this.renderLogin} className='none'>
                  <Header as='h4' color='black'>Inicia sesión</Header>
                </button>
              </Message>
            </div>      
          )
        } else {
          return(
            //si esta registrado
            <div>
              <Header as='h2' textAlign='center'>
                Inicia sesión
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='Correo electrónico'/>
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Contraseña'
                    type='password'
                  />
                  <Form.Field>
                    <Button fluid size='large' onClick={this.redirectLogin}>
                      Iniciar sesion
                    </Button>
                  </Form.Field>
                  <Form.Field>
                    <Button color='google plus' fluid size='large' onClick={this.handleAuth}>
                      <Icon name='google plus' /> Iniciar con cuenta de Google
                    </Button>
                  </Form.Field>
                  <Form.Field>
                    <Button color='facebook' fluid size='large'>
                      <Icon name='facebook' /> Iniciar con cuenta de Facebook
                    </Button>
                  </Form.Field>
                  </Segment>
              </Form>
              <Message>
                No estas regristrado? 
                <button onClick={this.renderRegister} className='none'>
                  <Header as='h4' color='black'>Registrarse</Header>
                </button>
              </Message>
            </div>
          );
        }         
      }  
  }

  render() {
    return (
      <div className='login-form'>
        <Grid style={{ height: '100%', margin: '0em' }}  stackable reversed='computer tablet'>
          <Grid.Row style={{ padding: '0' }} columns={2}>
            <Grid.Column computer={5} style={{paddingRight: '4em', paddingLeft: '3em'}} textAlign='center' verticalAlign='middle'> 
              {this.renderPage()}
            </Grid.Column>
            <Grid.Column computer={11} style={{background: '#2e4453', padding: '0'}}>
              <Segment vertical style={{height: '20%', border: '0'}}>
                <Icon name='shipping' size='big'><Header as='h3'>Guille envios</Header></Icon>
                
              </Segment>
              <Segment vertical style={{height: '65%', border: '0'}}>
                <p >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                  consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                  link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                </p>
              </Segment>
              <Segment vertical textAlign='center' style={{height: '15%', border: '0'}}> 
                <Divider />
                <Button circular color='facebook' icon='facebook' />
                <Button circular color='twitter' icon='twitter' />
                <Button circular color='google plus' icon='google plus' />              
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Inicio;