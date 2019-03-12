//Dependencies
import React, {Component} from 'react';
import { Grid, Container, Header, Button, Checkbox, Form } from 'semantic-ui-react'

class Contact extends Component {
	render() {
		return(
			<Grid>
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
			</Grid>
		);
	}
}

export default Contact;