import React, { Component } from 'react';
import { Button, Container, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import './StylesMain.css'
import Documents from './Documents.js'
import {files} from 'C:/Users/Ezequiel/printer/src/files.json'

class Body extends Component {
	constructor() {
    super();
    this.state = {
      files
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.removeFile=this.removeFile.bind(this);
  }

  handleAddTask(file) {
    this.setState({
      files: [...this.state.files, file]
    })
  }

  removeFile(index) {
    if (window.confirm('Are you sure delete it?')) {
      this.setState ({
        files: this.state.files.filter( (e,i) => {
          return i !== index
        })
      })
    }
  }

  render() {
  	const files=this.state.files.map ((file, i) => {
  		return (
        <div key={i}>
          <Segment color='blue'>
            <Grid>
              <Grid.Column floated='left' width={5}>
                <Container>
                  <Header as='h3'>{file.title}</Header>
                </Container>
              </Grid.Column>
              <Grid.Column floated='right' width={5}>
                <Button color='blue' onClick={this.removeFile.bind(this, i)}>
                Delete
                </Button>
              </Grid.Column>
            </Grid>
          </Segment>
        </div>
      )
    })

    return (
    	<Segment size='small'>
			    	<Documents onAddFile={this.handleAddTask} cantidad={this.state.files.length}></Documents>
			    	<Segment.Group style={{width: '80%', margin:'0 auto'}}>
			    		{files}
			    	</Segment.Group>
	    </Segment>  
    );
  }
}

export default Body;