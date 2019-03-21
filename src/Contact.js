import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Checkbox,
  Divider,
  Dropdown,
  Form,
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
import firebase from 'firebase'
import {Link} from 'react-router-dom'
import Head from './components/Head.js'

const Orders = () => (
  <Head>
    <Segment style={{width: '80%', margin:'0 auto', marginBottom:'2em'}}>
		  <Container textAlign='center'><Header as='h1'>Formulario de Contacto</Header></Container>		
  		<Form>
  		    <Form.Field>
  		      <label>Nombre y Apellido</label>
  		      <input placeholder='Nombre y Apellido'/>
  		    </Form.Field>
  		    <Form.Field>
  		      <label>Correo electronico</label>
  		      <input placeholder='Correo electronico' />
  		    </Form.Field>
  		    <Form.TextArea label='Mensaje' placeholder='Escriba aqui su mensaje...' />
  		    <Form.Field>
  		      <Checkbox label='reCAPTCHA' />
  		    </Form.Field>
  		    <Button type='submit'color="red">Enviar</Button>
  		</Form>
	  </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
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
  </Head>
)
export default Orders