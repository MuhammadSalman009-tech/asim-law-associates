import React, { Component } from "react";
import { updates } from "../data/LatestUpdatesData";
import UpdatesCard from "./UpdatesCard";

class LatestUpdates extends Component {
  render() {
    return (
      <div className="personal-injury-page">
        <h2>Latest Updates</h2>
        {updates.map((update) => (
          <UpdatesCard update={update} />
        ))}
      </div>
    );
  }
}

export default LatestUpdates;
