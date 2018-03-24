import React from 'react';
import _ from 'lodash';
import starSVGPath from './starSVGPath.jsx';
import defaultStyles from './starScale.css';

export default class StarScale extends React.Component {
  constructor() {
    super();

  }


  Star(id, filled) {
    return (
      <svg className={filled ? defaultStyles.filledStar : defaultStyles.star} key={'star_'+id} viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" ><path d={starSVGPath} ></path></svg>
    );
  }

  // PolyStar(id, filled) {
  //   return (
  //     <polygon className={filled ? defaultStyles.filledStar : defaultStyles.star} key={'star_'+id} fill="black" points="75.2,107.7 73.7,103 77.7,100.2 72.8,100.2 71.2,95.2 69.6,100.2 64.7,100.2 68.7,103 67.2,107.7 71.2,104.8"></polygon>
  //   );


  // }

  PointyStar(id, filled) {
    return (
      <svg className={filled ? defaultStyles.filledStar : defaultStyles.star} key={'star_'+id} viewBox="0 0 15 15" role="presentation" aria-hidden="true" focusable="false" ><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" ></path></svg>
    );
  }
    

  Stars() {
    let points = [];
    for (var i = 0; i < 5; i++) {
      let filled = i <= this.props.rating;
      points.push(this.Star(i, filled));
    }
    return points;
  }


  render () {

    return (
      <div className={(this.props.className !== undefined) ? this.props.className : defaultStyles.starScale} >
        <span>{this.Stars()}</span>
      </div>
      );
  }
}