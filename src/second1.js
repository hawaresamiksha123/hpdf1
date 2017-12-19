import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './App1.css';
import RaisedButton from 'material-ui/RaisedButton';
import CardExampleWithAvatar from './third1.js';
import SocialPeople from 'material-ui/svg-icons/social/people';

const style1 = {
  height: 50,
  width: 300,
  margin: 10,
  top:178,
  left:120,
  textAlign: 'left',
  display: 'inline-block',
  position:"absolute",
};
const style2 = {
  height: 970,
  width: 500,
  top:178,
  left:400,
  marginLeft: 100,
  marginTop:10,
  display: 'inline-block',
  textAlign: 'center',
  position:"absolute",
};
const style3 = {
  height: 180,
  width: 300,
  top:253,
  left:120,
  marginLeft: 10,
  marginTop:5,
  textAlign: 'center',
  display: 'block',
  position:"absolute",
};
const style4 = {
  height: 320,
  width: 300,
  top:453,
  left:120,
  marginLeft: 10,
  marginTop:5,
  textAlign: 'center',
  float:"left",
  position:"absolute",
};
const style8 = {
  height: 320,
  width: 300,
  top:795,
  left:120,
  marginLeft: 10,
  marginTop:5,
  textAlign: 'center',
  float:"left",
  position:"absolute",
};

const stylebutton3 = { position:"absolute", left:70,marginRight:0,float:"right",marginTop:4,top:76,height:25,borderRadius:50,};
const stylebutton1 = { position:"absolute", left:70,marginRight:0,float:"right",marginTop:4,top:145,height:25,borderRadius:50,};
const stylebutton2 = { position:"absolute", left:70,marginRight:0,float:"right",marginTop:4,top:210,height:25,borderRadius:50,};



const PaperExampleSimple = () => (
<div>
    <Paper style={style1} zDepth={1} 
children={<div>
<h3 style={{position:"absolute",left:20,fontSize:18,}}>Search related: 
<span style={{color:"blue",fontSize:"13px"}}>
<a href="portfolio.html" target="_blank" style={{textDecoration:"none"}}> Show</a> </span> </h3>
</div>
}
	/>
<Paper style={style3} zDepth={1}
children={
<div>
	<h3 style={{position:"absolute",left:14,fontSize:18,}}>Related searches</h3>
	<a href="" style={{position:"absolute",left:14,top:45,fontSize:15,textDecoration:"none",color:"blue"}}><strong>raga</strong></a>
	<a href="" style={{position:"absolute",left:14,top:70,fontSize:15,textDecoration:"none",color:"blue"}}><strong>delhi high court</strong></a>
	<a href="" style={{position:"absolute",left:14,top:95,fontSize:15,textDecoration:"none",color:"blue"}}><strong>#amarnath</strong></a>
	<a href="" style={{position:"absolute",left:14,top:120,fontSize:15,textDecoration:"none",color:"blue"}}><strong>zahira wasim></strong></a>
	<a href="" style={{position:"absolute",left:14,top:145,fontSize:15,textDecoration:"none",color:"blue"}}><strong>n. sathiya moorthy</strong></a>
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
    <RaisedButton label="Follow" primary={true} style={stylebutton3} buttonStyle={{borderRadius:50}}/>
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

    <Paper style={style2} zDepth={1} 
	children={<CardExampleWithAvatar />}
	/>

    <Paper style={style8} zDepth={1}
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

</div>
);

export default PaperExampleSimple;