//import PropTypes from 'prop-types'
import React from 'react'
import {
  Grid,
  Image,
  Segment
} from 'semantic-ui-react'
import Menubar from './components/Menubar.js'
import Head from './components/Head.js'
import Footer from './components/Footer.js'
import img from './images/paragraph.png'

const Orders = () => (
  <Grid style={{margin: '0em'}}>
		<Grid.Column computer={1} only='computer' style={{padding: '0em'}}>
    		<Menubar />
		</Grid.Column>
		<Grid.Column computer={15} mobile={16} tablet={16} style={{padding: '0em'}}>
			<Head>
			    <Segment loading style={{height: '400px', width: '65%', margin: '2em auto'}}>
			      <Image src={img} centered style={{padding: '5em 0em'}}/>
			    </Segment>
			    <Footer />		
  			</Head>
		</Grid.Column>
	</Grid>	
)
export default Orders;

