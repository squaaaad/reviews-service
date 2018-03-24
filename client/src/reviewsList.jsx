import React from 'react';
import ReviewListEntry from './reviewListEntry.jsx';
import _ from 'lodash';

export default class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

  }



  render () {

    return (
      <div id="reviewlist">
            {_.map(this.props.reviews, (review, i) => (<ReviewListEntry review={review} key={review.review_id} onFlagReview={this.props.onFlagReview} />))}
      </div>
    );
  }
}