import React from "react";
import { baseURL } from "./base-url";
function UpdatesCard({ member }) {
  return (
    <div className="member-card">
      <div className="member-card-image">
        <img
          src={`${baseURL}images/${member.image}`}
          className="member-img"
          alt={member.name}
          width="100%"
        />
      </div>
      <div className="member-card-body">
        <h5 className="member-card-title">{member.name}</h5>
        <p className="member-card-text">{member.about}</p>
      </div>
    </div>
  );
}

export default UpdatesCard;
