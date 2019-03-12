import React from 'react';
import { Grid, Header, Message} from 'semantic-ui-react'


const Register = () => (
  <div>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Message>
          <Header as='h3'>
          	Registrado con exito! por favor verifique su casilla de correo para validar su cuenta.
          </Header>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default Register


