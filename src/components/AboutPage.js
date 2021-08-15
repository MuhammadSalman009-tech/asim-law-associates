import React, { Component } from "react";
import { baseURL } from "./base-url";
import "../css/memberCard.css";
import MemberCard from "./MemberCard";
class AboutPage extends Component {
  render() {
    const members = [
      {
        name: "Muhammad Salman",
        about: `This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.`,
        image: `property-law.jpg`,
      },
    ];
    return (
      <>
        <div className="about-page">
          <h1>About Us</h1>
          <div className="about-page-content">
            <div className="about-page__info-content">
              <img
                alt="john-williams-image"
                src={`${baseURL}images/asim.jpeg`}
              />
              <p>
                After LLM from University of East London and graduation from
                Punjab University became a professional Advocate of the High
                Courts having expertise in the field of Criminal Cases. Mr.
                Iqbal has successfully participated in cases as team leader . He
                is the Head of the Criminal Litigation Cell in the province of
                Punjab
                <p>
                  "International Law Firm, will always demonstrate its
                  commitment to sustainability, both individually and as a firm.
                  By actively participating in our communities and integrating
                  sustainable business practices wherever possible."
                </p>
              </p>
            </div>
          </div>
          <div className="members-section">
            <h1>Our Members</h1>
            {members.map((member) => (
              <MemberCard member={member} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default AboutPage;
