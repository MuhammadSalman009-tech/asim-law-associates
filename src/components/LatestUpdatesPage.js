import React, { Component } from "react";
import UpdatesCard from "./UpdatesCard";

class LatestUpdates extends Component {
  render() {
    const updates = [
      {
        title: "What Are The Property Laws In Pakistan",
        description: `Article 4 subsection 2 of the constitution of Islamic Republic of Pakistan provides that no action detrimental to the life, liberty, body, reputation or property of any person shall be taken except in accordance with law. This article of the constitution provides protection to all citizens of Pakistan with regards to their property rights.`,
        image: `property-law.jpg`,
      },
    ];
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
