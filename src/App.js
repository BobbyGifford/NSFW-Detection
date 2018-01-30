import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';

import InputHeader from './components/InputHeader/InputHeader';
import InputField from './components/InputField/InputField';
import OutputImage from './components/OutputImage/OutputImage';
import OutputRating from './components/OutputRating/OutputRating';
import apiKey from "./config/dev";

// nsfw value response.outputs[0].data.concepts[0].value
// sfw value response.outputs[0].data.concepts[1].value

const app = new Clarifai.App({
  apiKey: apiKey.clarifaiKey,
});


class App extends Component {
  constructor(){
    super();

    this.state = {
      input: "",
      imageUrl: "",
      nsfwRating: null,
      sfwRating: null
    }
  }

  onChange = (event) => {
    this.setState({input: event.target.value})
  }

  setRatingData = (data) => {
    const nsfwRating = data.outputs[0].data.concepts[0].value;
    const sfwRating = data.outputs[0].data.concepts[1].value;
    
    this.setState({ sfwRating })
    this.setState({ nsfwRating })
  }

  onSubmit = (event) => {
    event.preventDefault();
    // e.target.reset();
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.NSFW_MODEL, this.state.input).then((response) => {
        this.setRatingData(response);
      },
      function(err) {
        console.log(err);
      }
    );  }

  render() {
    return (
      <div className="App">
      <InputHeader />
      <InputField onChange={this.onChange} onSubmit={this.onSubmit}/>
      {this.state.imageUrl ? <OutputImage imageUrl={this.state.imageUrl} /> : null}
      {this.state.nsfwRating ? <OutputRating nsfwRating={this.state.nsfwRating} sfwRating={this.state.sfwRating}/> : null}
      </div>
    );
  }
}

export default App;