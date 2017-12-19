import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SvgIconExampleIcons from './first.js';
import Divider from 'material-ui/Divider';
import PaperExampleSimple from './second.js'; 

export class App extends Component {
  render() {
    return (
<MuiThemeProvider>
	<div><SvgIconExampleIcons /></div><br/><br/><br/>
	<Divider/>
	<PaperExampleSimple />
</MuiThemeProvider>
    );
  }
};


export default App;
