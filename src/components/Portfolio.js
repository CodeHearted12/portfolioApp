import React, {Component} from 'react';

export default class Portfolio extends Component {
  render(){
    let ul = {
    color: "#FF4571",
    fontSize: 14,
    textAlign: "center",
    listStyle: "none"
  };

  return(
    <div>
      <h1 style={{textAlign: "center", color: "#FF4571"}}>"Brandon Walden's Portfolio"</h1>
      <div style={{textAlign:"center"}}>
        <img src={require('../images/LakeProfilePicSmall.jpg')} alt="" style={{width: "50%", borderRadius: "90%"}}/>
      <ul style={ul}>
        <li>The Iron Yard Orlando</li>
        <li>Projects</li>
      </ul>
      </div>
    </div>
  );
}
}
