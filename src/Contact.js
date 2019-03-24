//import PropTypes from 'prop-types'
import React from 'react'
import {
  Button,
  Container,
  Checkbox,
  Form,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'
import Head from './components/Head.js'
import Footer from './components/Footer.js'

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
    <Footer />
  </Head>
)
export default Orders