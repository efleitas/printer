import React, {Component} from 'react';
import { Header, Grid, Container, Button, Checkbox, Form} from 'semantic-ui-react'
import Head from './Head.js'

class Contact extends Component {
	render() {
		return(
			<div>
				<Head />
				<Grid>
					<Grid.Row>
						<Grid.Column width={4}>
							
						</Grid.Column>
						<Grid.Column width={9}>
							<Container textAlign='center'><Header as='h1'>Formulario de Contacto</Header></Container>		
							<Form>
							    <Form.Field>
							      <label>Nombre y Apellido</label>
							      <input placeholder='Nombre y Apellido' />
							    </Form.Field>
							    <Form.Field>
							      <label>Correo electronico</label>
							      <input placeholder='Correo electronico' />
							    </Form.Field>
							    <Form.TextArea label='Mensaje' placeholder='Escriba aqui su mensaje...' />
							    <Form.Field>
							      <Checkbox label='reCAPTCHA' />
							    </Form.Field>
							    <Button type='submit'color="blue">Enviar</Button>
							</Form>
						</Grid.Column>
						<Grid.Column width={3}>

						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Contact;