import React, { Component } from 'react';
import './App1.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import SvgIconExampleIcons from './first1.js';
import PaperExampleSimple from './second1.js';

class App extends Component {
  render() {
    return (
<MuiThemeProvider>

<div  >      
	<div><SvgIconExampleIcons className="svgicons"/><br/><br/><br/></div>
	<Divider/>
  <AppBar
    title="aadhar"
	showMenuIconButton={false} 
	titleStyle={{position:"relative",left:100,}}
 />
	<strong style={{position:"absolute",height:100,left:110, top:120,margin:17,fontSize:15,}}> Top &nbsp;&nbsp; Latest &nbsp;&nbsp; People 	&nbsp;&nbsp; Photos &nbsp;&nbsp; Videos &nbsp;&nbsp; News 	&nbsp;&nbsp; Broadcasts  </strong><br/><br/><br/>
	<Divider/>
	<PaperExampleSimple />
</div>
</MuiThemeProvider>
    );
  }
}

export default App;
