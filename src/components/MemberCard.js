import React from "react";
import "../css/memberCard.css";
import { baseURL } from "./base-url";
function MemberCard({ member }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="member-card">
        <div className="member-card-image">
          <img
            src={`${baseURL}images/${member.image}`}
            className="member-img"
            alt={member.name}
          />
        </div>
        <div className="member-card-body">
          <h5 className="member-card-title">{member.name}</h5>
          <p className="member-card-text">Advocate High Court</p>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
