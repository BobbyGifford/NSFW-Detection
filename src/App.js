import React, { Component } from 'react';
import './App.css';

import InputHeader from './components/InputHeader/InputHeader';
import InputField from './components/InputField/InputField';

class App extends Component {
  constructor(){
    super();

    this.state = {
      input: "",
      imageUrl: ""
    }
  }

  onChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    // e.target.reset();
    console.log(this.state.input);
  }

  render() {
    return (
      <div className="App">
      <InputHeader />
      <InputField onChange={this.onChange} onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default App;
