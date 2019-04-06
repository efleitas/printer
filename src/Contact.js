import React from 'react'
import {
  Button,
  Container,
  Checkbox,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
import Menubar from './components/Menubar.js'
import Head from './components/Head.js'
import Footer from './components/Footer.js'

const Contact = () => (
  <Grid style={{margin: '0em'}}>
        <Grid.Column computer={1} only='computer' style={{padding: '0em'}}>
          <Menubar />
      </Grid.Column>
      <Grid.Column computer={15} mobile={16} tablet={16} style={{padding: '0em'}}>
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
      </Grid.Column>
      </Grid> 
)
export default Contact

