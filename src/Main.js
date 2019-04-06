//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Grid,
  Segment,
} from 'semantic-ui-react'
import Menubar from './components/Menubar.js'
import Documents from './components/Documents.js'
import Head from './components/Head.js'
import Footer from './components/Footer.js'
import {files} from './files.json'

class Main extends Component {
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
    if (window.confirm('Esta seguro que desea quitar el archivo?')) {
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
          <Segment color='red' style={{margin: '0.5em'}}>
            <div >
              <h3>{file.title}</h3>
              <span>{file.priority}</span>
            </div>

            <div>
              <p>{file.description}</p>
            </div>

            <div>
              <Button color='red' onClick={this.removeFile.bind(this, i)}>
              Delete
              </Button>
            </div>
          </Segment>
        </div>
      )
    })

    return(
      <Grid style={{margin: '0em'}}>
        <Grid.Column computer={1} only='computer' style={{padding: '0em'}}>
          <Menubar />
      </Grid.Column>
      <Grid.Column computer={15} mobile={16} tablet={16} style={{padding: '0em'}}>
        <Head>
          <Documents onAddFile={this.handleAddTask} cantidad={this.state.files.length}></Documents>
          <Segment.Group style={{width:'80%', margin: '2em auto', borderColor:'grey'}}>
            {files}
          </Segment.Group>
          <Footer />
        </Head>
      </Grid.Column>
      </Grid> 

      )
  }
}
  
export default Main;

