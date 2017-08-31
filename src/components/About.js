import React, {Component} from 'react';

export default class About extends Component {
  render(){

    let ul = {
      color: "#FF4571",
      fontSize: 14,
      textAlign: "center",
      listStyle: "none"
    };

    return(
      <div>
        <h1 style={{textAlign: "center", color: "#FF4571"}}>About</h1>
        <div style={{textAlign:"center"}}>
          <img src={require('../images/LakeProfilePicSmall.jpg')} alt="" style={{width: "50%", borderRadius: "90%"}}/>
        </div>
        <ul style={ul}>
          <li>Developer</li>
          <li>Sales Professional</li>
          <li>Artist</li>
        </ul>
      </div>
    );
  }
}
