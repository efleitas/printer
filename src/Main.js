import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import firebase from 'firebase';
import {Link} from 'react-router-dom'
import Documents from './components/Documents.js'
import Head from './components/Head.js'
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
      <Head>
          <Documents onAddFile={this.handleAddTask} cantidad={this.state.files.length}></Documents>
            <Segment.Group style={{width:'80%', margin: '2em auto', borderColor:'grey'}}>
              {files}
            </Segment.Group>
        <Segment inverted vertical style={{ padding: '5em 0em'}}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Head>

      )
  }
}
  
export default Main;