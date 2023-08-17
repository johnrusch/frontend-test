import React from 'react';
import type { Review } from '../types';

type ReviewListProps = {
  reviews: Review[];
};

const ReviewList: React.FC<ReviewListProps> = ({reviews}) => (
  <div className="row">
    <div className="col mb-1">
      <table id="review-list" className="table table-striped table-hover h-100">
        <thead>
          <tr>
            <th className="w-15 list-header sortable-header">Profile</th>
            <th className="list-header sortable-header">Rating</th>
            <th className="list-header">Body</th>
            <th className="w-10 list-header sortable-header">Status</th>
            <th className="w-13 list-header sortable-header">Publish Date</th>
            <th className="w-13 list-header sortable-header">Review Date</th>
            <th className="w-11 list-header sortable-header">Created</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <td className="h-100 d-flex flex-column justify-content-between">
                <div>
                  <a href={review.profileLink} title={review.profileTitle}>{review.profileTitle}</a>
                  <i className="text-muted fa fa-info-circle"></i>
                </div>
                <div>
                  <a className="d-block small" href={review.reviewDetailsLink}>details</a>
                </div>
              </td>
              <td className="display-5 text-center">{review.rating}</td>
              <td className="">
                <p>{review.reviewText}</p>
                {/* Status controls omitted for brevity */}
              </td>
              <td className="status-col smallish">
                <span className={`status-${review.status}`}>
                  <i className="fa fa-clock-o"></i> {review.status}
                </span>
              </td>
              <td className="pub-date-col smallish">{review.publishDate}</td>
              <td className="smallish">{review.reviewDate}</td>
              <td className="smallish">{review.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ReviewList;
