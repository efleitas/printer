import React, { Component } from 'react';

import Content from './content.js';

class App extends Component {
  render() {
    const {children}=this.props;
    return (
      <div className="App">
        <Content body={children} />
      </div>
    );
  }
}

export default App;
