import React, {Component} from 'react';

export default class About extends Component {
  render(){

    let liStyle = {
      color: "#E5B13A",
      fontSize: 14,
      textAlign: "center",
      listStyle: "none"
    };

    return(
      <div>
        <h1 style={{textAlign: "center", color: "#E5B13A"}}>About</h1>
        <br />
        <div>
          <img src={require('../images/LakeProfilePicSmall.jpg')} alt="" style={{width: "40%", borderRadius: "30%"}}/>
        </div>
        <ul style={liStyle}>
          <li>Developer</li>
          <li>Sales Profession</li>
          <li>Artist</li>
        </ul>
      </div>
    );
  }
}
