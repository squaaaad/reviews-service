import React from 'react';
import _ from 'lodash';
import circleSVGPath from './circleSVGPath.jsx';

export default class userPhoto extends React.Component {
  constructor(props) {
    super(props);

  }



  render () {

    return (
      <div id="userPhoto">
          <img src={this.props.photo} 
          style={{position: 'relative', marginTop:"20px",height:"80px", width:"80px",display:"inline-block",borderRadius:"50%"}}></img>
      </div>
    );
  }
}
{/*

        <svg viewBox="0 0 25 25" 
          
          style={{position: 'relative', maxHeight:"80px", maxWidth:"80px",display:"inline-block",fill:"currentColor"}}>
        </svg>

*/}

          // role="presentation" 
          // aria-hidden="true" 
          // focusable="false"

          // <path d={circleSVGPath} ></path>
          // xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          // <image xlink:href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>