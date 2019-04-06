import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Menubar from './Menubar.js'

class Test extends Component {
  	render() {

    return (
    	<Grid style={{margin: '0em'}}>
    		<Grid.Column computer={1} only='computer' style={{padding: '0em'}}>
	    		<Menubar />
			</Grid.Column>
			<Grid.Column computer={15} mobile={16} tablet={16} style={{padding: '0em'}}>
				
			</Grid.Column>
    	</Grid>	
    );
  }
}

export default Test;