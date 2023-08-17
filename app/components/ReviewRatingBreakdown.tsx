import React from 'react';
import type { Breakdown } from '../types';

interface ReviewRatingBreakdownProps {
  url: string;
  reviewRatingBreakdown: Breakdown;
}

const ReviewRatingBreakdown: React.FC<ReviewRatingBreakdownProps> = ({ url, reviewRatingBreakdown }) => {
  return (
    <ul className="list-group list-group-flush">
      {[5, 4, 3, 2, 1].map((rating) => (
        <li className="list-group-item px-3" key={rating}>
          <div className="row align-items-center">
            <div className="col-1 px-0">{rating}</div>
            <div className="col px-0">
              <a href={`${url}&fRating=${rating}`}>
                <div className="progress" title={`${reviewRatingBreakdown[`rating${rating}Percentage`]}%`}>
                  <div 
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={Number(reviewRatingBreakdown[`rating${rating}Percentage`])}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{width: `${reviewRatingBreakdown[`rating${rating}Percentage`]}%`}}
                  ></div>
                </div>
              </a>
            </div>
            <div className="col-4 px-0 text-right">{reviewRatingBreakdown[`rating${rating}Count`]}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReviewRatingBreakdown;
