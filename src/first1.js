import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialNotificationsNone from 'material-ui/svg-icons/social/notifications-none';
import CommunicationMessage from 'material-ui/svg-icons/communication/message';
import {purple900} from 'material-ui/styles/colors';
import SearchBar from 'material-ui-search-bar'
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import logotwitter from './logotwitter1.svg';

const stylebutton = { position:"absolute", left:1120,marginRight:120,float:"right",marginTop:6,top:7,height:30,borderRadius:50,};
const styleavatar = {float:"right",position:"absolute",left:1070,marginRight:20,marginTop:8,};

const styleimg={
position:"absolute",
height:25,
marginTop:15,
left:400,
marginLeft:180,
}

const SvgIconExampleIcons = () => (
  <div>
<a href="https://www.w3schools.com">
<ActionHome style= {{top:15,left:120,position:"absolute",}} color={purple900} /> <p style={{position:"absolute",left:145,top:5}} >Home</p>
</a>
<a href="https://www.w3schools.com">
<SocialNotificationsNone style={{top:15,left:200,position:"absolute",}}  color={purple900} /><p style={{position:"absolute",left:225,top:5}} >Notifications</p>
</a>
<a href="https://www.w3schools.com">
<CommunicationMessage style={{top:15,left:330,position:"absolute",}}  color={purple900} />
<p style={{position:"absolute",left:360,top:5}} >Messages</p>
</a>
    <RaisedButton label="Tweet" primary={true} style={stylebutton} buttonStyle={{borderRadius:50}}/>
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyB1FphZNWGRw5heaChpplplAJwKXzS9FdUVVxHsGgOkMvLxzB7A"
          size={40}
          style={styleavatar}
        />

    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
		position:"absolute",
        maxWidth: 300,
	   height:40,
	   left:780,
	   borderRadius:50,
	   top:8,
      }}
    />         <img src={logotwitter} alt="logo" className="applogo" style={styleimg}/>


  </div>
);

export default SvgIconExampleIcons;