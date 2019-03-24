//import PropTypes from 'prop-types'
import React from 'react'
import {
  Image,
  Segment
} from 'semantic-ui-react'
import Head from './components/Head.js'
import Footer from './components/Footer.js'
import img from './images/paragraph.png'

const Orders = () => (
  <Head>
    <Segment loading style={{height: '400px', width: '80%', margin: '2em auto'}}>
      <Image src={img} centered style={{padding: '5em 0em'}}/>
    </Segment>
    <Footer />		
  </Head>
)
export default Orders;