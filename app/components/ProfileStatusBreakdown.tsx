import React from "react";
import type { ProfileStatus } from "../types";

const ProfileStatusBreakdown: React.FC<{ profileStatus: ProfileStatus }> = ({
  profileStatus,
}) => (
  <ul className="list-group list-group-flush">
    <li className="list-group-item px-0">
      <i className="fa fa-play text-success"></i>
      {profileStatus.isVpsUser ? (
        "Live"
      ) : (
        <a href={`${profileStatus.profileStatusBreakdownUrlPrefix}&fLive=true`}>
          Live
        </a>
      )}
      <div className="float-right">{profileStatus.LIVE}</div>
    </li>
    <li className="list-group-item px-0">
      <i className="fa fa-pause text-muted"></i>
      {profileStatus.isVpsUser ? (
        "Offline"
      ) : (
        <a
          href={`${profileStatus.profileStatusBreakdownUrlPrefix}&fLive=false`}
        >
          Offline
        </a>
      )}
      <div className="float-right">{profileStatus.OFFLINE}</div>
    </li>
    <li className="list-group-item px-0"></li>

    {profileStatus.PUB > 0 && (
      <li className="list-group-item px-0">
        <i className="fa fa-wifi text-nrc-blue"></i>
        {profileStatus.isVpsUser ? (
          "Public"
        ) : (
          <a
            href={`${profileStatus.profileStatusBreakdownUrlPrefix}&fStatus=PUB`}
          >
            Public
          </a>
        )}
        <div className="float-right">{profileStatus.PUB}</div>
      </li>
    )}

    <li className="list-group-item px-0">
      <i className="fa fa-check-circle text-success"></i>
      {profileStatus.isVpsUser ? (
        "Enabled"
      ) : (
        <a
          href={`${profileStatus.profileStatusBreakdownUrlPrefix}&fStatus=PRV`}
        >
          Enabled
        </a>
      )}
      <div className="float-right">{profileStatus.PRV}</div>
    </li>

    <li className="list-group-item px-0">
      <i className="fa fa-times-circle text-danger"></i>
      {profileStatus.isVpsUser ? (
        "Disabled"
      ) : (
        <a
          href={`${profileStatus.profileStatusBreakdownUrlPrefix}&fStatus=DIS`}
        >
          Disabled
        </a>
      )}
      <div className="float-right">{profileStatus.DIS}</div>
    </li>
  </ul>
);

export default ProfileStatusBreakdown;
