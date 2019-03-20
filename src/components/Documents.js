import React, {Component} from 'react';
import {Button, Container, Form, Header, Icon, Segment} from 'semantic-ui-react'
import './StylesMain.css'

class inputFile extends Component {
	constructor() {
		super();
		this.state = {
      		title: 'Archivo agregado',
      		description: 'file to print',
      		priority: 'low'
    	};
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.addFiles=this.addFiles.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
    	this.props.onAddFile(this.state);
    	this.setState({
    		title: 'Archivo agregado',
      		description: 'file to print',
      		priority: 'low'
    	})
    	document.getElementById("btn").disabled = true;
    	document.getElementById("btn").style.opacity= '0.45';
    	document.getElementById("texto").innerHTML='Buscar archivo';
    }

    addFiles() {
    var inputs = document.querySelectorAll( '.inputfile' );
    
    Array.prototype.forEach.call( inputs, function( input )
      {
      var label= document.getElementById('texto'), labelVal = label.value;
      input.addEventListener('change', function( e )
      {
        var fileName = '';
        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
          fileName = e.target.value.split( '\\' ).pop();

        if( fileName )
        	label.innerHTML= fileName;
        	document.getElementById("btn").disabled = false;
        	document.getElementById("btn").style.opacity= '1';
      });
    })
    
  	}


	render() {

		return (
			<Form onSubmit={this.handleSubmit} style={{width: '80%', margin: '0 auto'}}>
				<Segment  color='red' as='h3' textAlign='right' style={{margin: '2em 0 em'}}>
		          <Header>
		          	Cola de impresion: {this.props.cantidad}
		          </Header>
		        </Segment>	
				<Segment placeholder style={{margin: '2em 0em', height: '400px', outline:'3px dashed grey'}} >
		          <Header icon>
		            <Icon name='pdf file outline'/>
		                Arrastre el archivo deseado o seleecionelo desde aqui:
		            </Header>
		            <input 
		              type="file" 
		              name="file" 
		              id="file" 
		              className="inputfile" 
		              data-multiple-caption="{count} files selected"
		              onClick={this.addFiles}
		              multiple
		            />
		            <label for="file" id='texto'>Buscar archivo</label>
			        <Container textAlign='center' style={{margin: '2em'}}>
				        <button 
			            	id='btn' 
			            	type='sumbit' 
			            	className='btn btn-red disable' 
			            	disabled>
			            	Agregar
			            </button>
			        </Container>	      
		        </Segment>		        	        
       		</Form>			
		)
	}
}

export default inputFile;