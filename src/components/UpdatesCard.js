import React from "react";
import { baseURL } from "./base-url";
import "../css/updateCard.css";
function UpdatesCard({ update }) {
  return (
    <div className="update-card">
      <div className="update-card-image">
        <img
          src={`${baseURL}images/${update.image}`}
          className="update-img"
          alt={update.title}
          width="100%"
          height="100%"
        />
      </div>
      <div className="update-card-body">
        <h5 className="update-card-title">{update.title}</h5>
        <p className="update-card-text">{update.description}</p>
      </div>
    </div>
  );
}

export default UpdatesCard;
