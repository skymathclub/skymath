import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import './App.css';
import GoogleButton from './components/GoogleButton';
import ZoomButton from './components/ZoomButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Loading...",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/")
      .then(response => response.json())
      .then(data => {
        this.setState({ message: data.message });
      });
  }

  render() {
    return (
      <Grid container style={{width: '100%', marginTop: '2em'}}>
        <Grid item xs={2} >
          <p className="App-intro">{this.state.message}</p>
        </Grid>
        <Grid item xs={4} style={{display: 'flex', justifyContent: 'center'}} >
          <ZoomButton/>
        </Grid>
        <Grid item xs={4} style={{display: 'flex', justifyContent: 'right'}} >
          <GoogleButton/>
        </Grid>
      </Grid>
    )
  }
}

export default App;
