import React from 'react';
import type { ReviewStatus } from '../types';

interface Props {
  reviewStatus: ReviewStatus;
  url: string;
}

const ReviewStatusBreakdown: React.FC<Props> = ({ reviewStatus, url }) => (
  <ul className="list-group list-group-flush">
    <li className="list-group-item px-0">
      <i className="fa fa-check-square-o text-success"></i>
      <a href={`${url}&fStatus=PUBL`}>Published</a>
      <div className="float-right">{reviewStatus.PUBL.toLocaleString()}</div>
    </li>

    {(reviewStatus.SCHED > 0 || reviewStatus.reviewStatusBreakdownScheduleEnabled) && (
      <li className="list-group-item px-0">
        <i className="fa fa-calendar text-nrc-orange"></i>
        <a href={`${url}&fStatus=SCHED`}>Scheduled</a>
        <div className="float-right">{reviewStatus.SCHED.toLocaleString()}</div>
      </li>
    )}

    {(reviewStatus.APPR > 0 || reviewStatus.reviewStatusBreakdownApprovedEnabled) && (
      <li className="list-group-item px-0">
        <i className="fa fa-check text-nrc-blue"></i>
        <a href={`${url}&fStatus=APPR`}>Approved</a>
        <div className="float-right">{reviewStatus.APPR.toLocaleString()}</div>
      </li>
    )}

    <li className="list-group-item px-0">
      <i className="fa fa-clock-o"></i>
      <a href={`${url}&fStatus=PEND`}>Pending</a>
      <div className="float-right">{reviewStatus.PEND.toLocaleString()}</div>
    </li>

    <li className="list-group-item px-0">
      <i className="fa fa-flag text-danger"></i>
      <a href={`${url}&fStatus=FLAG`}>Flagged</a>
      <div className="float-right">{reviewStatus.FLAG.toLocaleString()}</div>
    </li>

    <li className="list-group-item px-0">
      <i className="fa fa-trash-o text-muted"></i>
      <a href={`${url}&fStatus=ARCH`}>Archived</a>
      <div className="float-right">{reviewStatus.ARCH.toLocaleString()}</div>
    </li>

    <li className="list-group-item px-0 text-muted">
      <i className="fa"></i>
      Total
      <div className="float-right">{reviewStatus.total.toLocaleString()}</div>
    </li>
  </ul>
);

export default ReviewStatusBreakdown;
