import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import AutoComplete from 'material-ui/AutoComplete';
import ImagePhoto from 'material-ui/svg-icons/image/photo';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import CommunicationMessage from 'material-ui/svg-icons/communication/message';
import ContentReply from 'material-ui/svg-icons/content/reply';
import SocialPeople from 'material-ui/svg-icons/social/people';
import RaisedButton from 'material-ui/RaisedButton';


const style1 = {
  height: 220,
  width: 300,
  left:100,
  margin: 15,
  position:'absolute',
  textAlign: 'center',
  display: 'inline-block',
};
const style2 = {
  height: 330,
  width: 300,
  margin: 15,
  left:100,
  top:300,
  position:'absolute',
  textAlign: 'center',
  display: 'inline-block',
};
const style3 = {
  height: 950,
  width: 500,
  margin: 20,
  left:430,
  top:60,
  position:'absolute',
  textAlign: 'center',
  display: 'inline-block',
};
const style4 = {
  height: 320,
  width: 300,
  margin: 20,
  left:960,
  top:60,
  position:'absolute',
  textAlign: 'center',
  display: 'inline-block',
};
const style5 = {
  height: 80,
  width: 300,
  margin: 20,
  left:960,
  top:400,
  position:'absolute',
  textAlign: 'center',
  display: 'inline-block',
};


const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];
const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};
const stylebutton = { position:"absolute", left:70,marginRight:0,float:"right",marginTop:4,top:75,height:25,borderRadius:50,};
const stylebutton1 = { position:"absolute", left:70,marginRight:0,float:"right",marginTop:4,top:145,height:25,borderRadius:50,};
const stylebutton2 = { position:"absolute", left:70,marginRight:0,float:"right",marginTop:4,top:210,height:25,borderRadius:50,};


export const PaperExampleSimple = () => (
  <div>
    <Paper style={style1} zDepth={1} 
	children={
		<div>
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-6oTTEDkkeN00JqrAQYWOvcg-e8MQt4eWjfOGq9ekv9ArFxHFw" alt="Smiley face" height="100" width="300"/>
	        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyB1FphZNWGRw5heaChpplplAJwKXzS9FdUVVxHsGgOkMvLxzB7A"
  size={70} 
style={{float:"left", marginLeft:5,position:"absolute", left:10,top:90,border:"2px solid white"}}/>
			<h3 style={{position:"absolute", left:100,top:90}}>Haware Samiksha</h3>
			<p style={{position:"absolute",top:118,left:100,color:"grey"}}>@SamikshaHaware</p>
			<p style={{position:"absolute",top:155,left:30,color:"grey"}}>Tweets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Following</p>
			<strong style={{position:"absolute",top:195,left:30,color:"blue"}}>3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6</strong>
		</div>
			}
	/>


    <Paper style={style2} zDepth={1}
	children={
		<div>
		<h3 style={{position:"absolute",left:15,}}>Trends for you &nbsp; . <span style={{color:"blue",fontSize:15}}><a href="" style={{color: "#03A9F4",}} >Change</a></span></h3>
		<h4 style={{position:"absolute",top:45,left:15,color:"blue",}}><a href="" style={{color: "#03A9F4",textDecoration:"none" }} >#TEDTalksIndiaNayiSoch</a></h4><p style={{position:"absolute",top:70,left:15,fontSize:13 }} >@iamsrk is Tweeting about this</p>
		<h4 style={{position:"absolute",top:90,left:15,color:"blue",}}><a href="" style={{color: "#03A9F4",textDecoration:"none",}} >#SalmanOnDID6</a></h4><p style={{position:"absolute",top:115,left:15,fontSize:13 }} >31.11K Tweets</p >
		<h4 style={{position:"absolute",top:135,left:15,color:"blue",}}><a href="" style={{color: "#03A9F4",textDecoration:"none" }} >#PuneTimesFWFinale</a></h4><p style={{position:"absolute",top:160,left:15,fontSize:13,  }} >1,638 Tweets</p>
		<h4 style={{position:"absolute",top:175,left:15,color:"blue",}}><a href="" style={{color: "#03A9F4",textDecoration:"none" }} >#INDvsSL</a></h4><p style={{position:"absolute",top:200,left:15,fontSize:13 }} >4,976 Tweets</p>
		<h4 style={{position:"absolute",top:220,left:15,color:"blue",}}><a href="" style={{color: "#03A9F4",textDecoration:"none" }} >#TeamIndia</a></h4><p style={{position:"absolute",top:245,left:15,fontSize:13 }} >6,886 Tweets</p>
		<h4 style={{position:"absolute",top:265,left:15,color:"blue",}}><a href="" style={{color: "#03A9F4",textDecoration:"none" }} >#RahulGandhiNHInterview</a></h4>

		</div>
	}
	 />
    <Paper style={style3} zDepth={1} 
	children={
		<div>
		        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyB1FphZNWGRw5heaChpplplAJwKXzS9FdUVVxHsGgOkMvLxzB7A" style={{position:"absolute",left:10,top:13}} size={30}/>
        <AutoComplete
          hintText="Type anything"
          dataSource={colors}
          menuProps={menuProps}
         style={{position:"absolute",left:60,top:5}} />
    <IconButton style={{position:"absolute",left:310}} tooltip="Add a Image"><ImagePhoto /></IconButton>
    <Divider />
    <Avatar src="https://pbs.twimg.com/profile_images/463172659040100352/cKa3fIpv_bigger.jpeg" style={{position:"absolute",left:10,top:65}} size={45}/>
	<h5 style={{position:"absolute",left:60,top:48,}} >Kailash Satyarthi</h5>	
	<p style={{position:"absolute",left:172,top:58,fontSize:12,color:"grey"}}  >@k_satyarthi . 5h</p>
	<p style={{position:"absolute",left:47,top:74,fontSize:13,textAlign:"left", marginRight:10,marginLeft:15,}}  >Journalists can be very effective drivers of social change by highlighting stories of hope, positivity, courage and compassion of ordinary people. Today at Mukti Ashram with PhD scholars for mass communication and journalism from many states.</p>
	<img src="https://pbs.twimg.com/media/DRQG0R_UMAIaxz4.jpg" alt=""  style={{height:320,width:400,position:"absolute",top:160,left:60,}}/>
	<p style={{position:"absolute",top:480,left:200,}}><ContentReply/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <CommunicationMessage /></p>


<hr style={{position:"relative",top:530,color:"grey"}}/>


    <Avatar src="https://pbs.twimg.com/profile_images/781536991384965120/P7FviVzt_bigger.jpg" style={{position:"absolute",left:10,top:550}} size={45}/>
	<h5 style={{position:"absolute",left:60,top:533,}} >Google Cloud</h5>	
	<p style={{position:"absolute",left:150,top:543,fontSize:12,color:"grey"}}  >@googlecloud . Jun 9</p>
	<p style={{position:"absolute",left:47,top:559,fontSize:13,textAlign:"left", marginRight:10,marginLeft:15,}}  >Start your first VM for free with Google Compute Engine.</p>
	<img src="https://pbs.twimg.com/ad_img/873090767379505152/KfTetQQ3?format=jpg&name=orig" alt="" style={{height:290,width:400,position:"absolute",top:603,left:60,}}/>
	<p style={{position:"absolute",top:893,left:190,}}><ContentReply/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <CommunicationMessage /></p>

</div>
	}
	/>
    <Paper style={style4} zDepth={1} 
	children={
	<div>
		<h3 style={{position:"absolute",left:10,top:1,}}>Who to follow<span style={{marginLeft:10,fontSize:12,color:"blue"}}><a href="" style={{textDecoration:"none",color:"blue"}}>Refresh . View all</a></span></h3>
		    <Avatar src="https://pbs.twimg.com/profile_images/815049165508112384/wJA8jWZh_bigger.jpg" style={{position:"absolute",left:10,top:60}} size={45}/>
		<h5 style={{position:"absolute",left:60,top:39,}} >CGTN</h5>	
	<p style={{position:"absolute",left:105,top:49,fontSize:12,color:"grey"}}  >@CGTNOfficial . Jun 9</p>
    <RaisedButton label="Follow" primary={true} style={stylebutton} buttonStyle={{borderRadius:50}}/>
<hr style={{position:"relative",top:105,color:"grey"}}/>
		    <Avatar src="https://pbs.twimg.com/profile_images/431732725184073728/0MGsrciP_bigger.jpeg" style={{position:"absolute",left:10,top:130}} size={45}/>
		<h5 style={{position:"absolute",left:60,top:108,}} >Rajnath Singh</h5>	
	<p style={{position:"absolute",left:155,top:118,fontSize:12,color:"grey"}}  >@rajnathsingh</p>
    <RaisedButton label="Follow" primary={true} style={stylebutton1} buttonStyle={{borderRadius:50}}/>
<hr style={{position:"relative",top:165,color:"grey"}}/>
		    <Avatar src="https://pbs.twimg.com/profile_images/733200181378834432/A7ISww1e_bigger.jpg" style={{position:"absolute",left:10,top:195}} size={45}/>
		<h5 style={{position:"absolute",left:60,top:175,}} >Teach For India</h5>	
	<p style={{position:"absolute",left:165,top:185,fontSize:12,color:"grey"}}  >@TeachForIndia</p>
    <RaisedButton label="Follow" primary={true} style={stylebutton2} buttonStyle={{borderRadius:50}}/>
<hr style={{position:"relative",top:225,color:"grey"}}/>
	<p style={{position:"absolute",top:250,left:20,}}><SocialPeople /></p>
	<strong style={{position:"absolute",top:270,left:55,}}><a href="" style={{textDecoration:"none",color:"blue",fontSize:15,}}>Find more people you know</a></strong>
	<p style={{position:"absolute",top:275,left:55,fontSize:13,color:"grey"}}>Import your contacts from Gmail</p>
	</div>
	}
	/>


    <Paper style={style5} zDepth={1}
	children={
		<p style={{color:"grey",fontSize:12.5,margin:10,}}> 2017 &nbsp; Twitter &nbsp; About &nbsp; Help &nbsp; &nbsp; Center &nbsp; Terms &nbsp; Privacy &nbsp; policy &nbsp; Cookies &nbsp; Ads &nbsp;  info &nbsp; Brand &nbsp; Blog &nbsp; Status &nbsp; Apps &nbsp; Jobs &nbsp; Marketing &nbsp; Businesses &nbsp; Developers</p>
	}
	 />
  </div>
);

export default PaperExampleSimple;