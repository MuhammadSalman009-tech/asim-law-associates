import React, { Component } from "react";
import { members } from "../data/AboutPageData";
import { baseURL } from "./base-url";
import MemberCard from "./MemberCard";
class AboutPage extends Component {
  render() {
    return (
      <>
        <div className="about-page">
          <h1>About Us</h1>
          <div className="about-page-content">
            <div className="about-page__info-content">
              <img alt="john-williams" src={`${baseURL}images/asim.jpeg`} />

              <p>
                <h2>Ch Asim Iqbal</h2>
                After LLM from University of East London and graduation from
                Punjab University he became a professional Advocate of the High
                Courts having expertise in the field of corporate consultancy
                and Criminal Cases. Mr. Iqbal has successfully participated in
                cases as team leader . He is the head of corporate consultancy
                and criminal Litigation Cell in the province of Punjab
              </p>
            </div>
          </div>
          <div className="members-section">
            <h1>Our Members</h1>
            <div className="row members-section-row">
              {members.map((member) => (
                <MemberCard member={member} key={member.id} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutPage;
