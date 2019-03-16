import React, { Component } from 'react';
import { Button, Grid, Header, Icon, Segment } from 'semantic-ui-react';

class Body extends Component {

  render() {

    return (
    	<Grid>
	        <Grid.Row>
				<Grid.Column width={3}>
					
			    </Grid.Column>
			    <Grid.Column width={13}>
			    	<Segment placeholder style={{marginRight: '2em'}}>
						<Header icon>
							<Icon name='pdf file outline' />
					      	No documents are listed for this customer.
					    </Header>
					    <Button primary>Add documents</Button>
					</Segment>
				</Grid.Column>
		    </Grid.Row>
	    </Grid>  
    );
  }
}

export default Body;