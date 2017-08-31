import React, {Component} from 'react';

export default class Home extends Component {
  render(){
    return(
      <div>
        <h1 style={{textAlign: "center", color: "#FF4571"}}>Home Page</h1>
        <div style={{textAlign:"center"}}>
          <img src={require('../images/LakeProfilePicSmall.jpg')} alt="" style={{width: "50%", borderRadius: "90%"}}/>
        </div>
      </div>
    );
  }
}
