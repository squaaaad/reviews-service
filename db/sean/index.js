//mongoDB interface
const mongo = require('mongoose');
// const _ = require('lodash');

const connect = () => {
    let mongoURI = process.env.DATABASE || 'mongodb://127.0.0.1/zagat'; 
    console.log('connecting to', mongoURI);
    return mongo.connect(mongoURI)
    .then(() => (console.log('connected to database')))
    .catch((err) => {
      console.log(err)
      return err;
    });
};

{/*
  const reviewAttributeSchema = {
    userImg: String,
    user: String,
    date: String,
    comment: String
  };

  const aggregateReviewSchema = {
    name: String,
    rating: Number
  };

  const reviewSchema = {
    id: String,
    aggregateReviews: [aggregateReviewSchema],
    averageRating: Number,
    ratingAccuracyDesc: Number,
    ratingCommunication: Number,
    ratingCleanliness: Number,
    ratingLocation: Number,
    ratingCheckIn: Number,
    ratingValue: Number,
    reviews: [reviewAttributeSchema]
  };

  const reviewAttributes = {
    userImg: 'string',
    user: 'string',
    date: 'string',
    comment: 'string'
  };
*/}

const reviewAttributeSchema = {
  "author_name": String, 
  "author_url": String,
  "language": String,
  "profile_photo_url": String,
  "rating": Number,
  "relative_time_description": String,
  "text": String,
  "time": Number,
}

const reviewSchema = {
  "_id": Number,
  "rating": Number,
  "reviews": [reviewAttributeSchema],
}

let validateReview = (review) => {
  for (var key in reviewAttributes) {
    if (typeof review[key] !== reviewAttributes[key]) {
      if (reviewAttributes[key].regx && !review[key].match(reviewAttributes[key].regx)) {
        return false;
      }
    }
  }
  return true;
};

let Review = mongo.model('Review', reviewSchema);
// let Review = mongo.model('review'); // test

// let filterValidReviews = (reviews) => {
//   return _.filter(reviews, validateReview);
// };

const isValidReviewId = async (id, checkDB) => {
  //console.log(isNaN(id));
  return !isNaN(id);
}

const saveExperience = (experienceObj/*, callback*/) => {
  return new Promise((resolve, reject) => {
    //console.log('saving experience', experienceObj.id);
    experienceObj.reviews = filterValidReviews(experienceObj.reviews);
    let review = new Review(experienceObj);
    review.save()
    .then((success) => {
      console.log('Saved experience', experienceObj.id, 'with', experienceObj.reviews.length, 'valid reviews');
      resolve(success);
      })
    .catch((err) => {
      reject(err);
    });
  });
}

const saveReview = (id, reviewObj) => {
  return false;
};

const getAllReviews = (id) => {
  return Review.findOne({_id: id * 1}).exec();
}

const disconnect = () => {
  return mongo.disconnect();

  //   (err, success) => {
  //   if (err) {
  //     callback(err)
  //   } else {
  //     callback(null, success);
  //   }
  // });
}

module.exports.disconnect = disconnect;
module.exports.isValidReviewId = isValidReviewId;
module.exports.saveReview = saveReview;
module.exports.saveExperience = saveExperience;
module.exports.getAllReviews = getAllReviews;
module.exports.connect = connect;
