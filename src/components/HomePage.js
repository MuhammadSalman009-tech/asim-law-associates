import React, { Component } from "react";
import { experties } from "../data/HomeData";
import AreasOfExpertyCard from "./AreasOfExpertyCard";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="top-half">
          <div className="top-content">
            <div className="content-1">
              <h4>
                <span>
                  "Injustice anywhere is a threat to justice everywhere. Martin
                  Luther King, Jr."
                </span>
              </h4>
            </div>
          </div>
          <div className="content-3">
            <h1>Ch Asim Iqbal</h1>
            <h2>ATTORNEY AT LAW</h2>
            <h4>
              Skilled Corporate Lawyer has broad experience in transactional
              analysis, mergers and acquisitions, and advising clients from
              business start-ups to seasoned companies. Provides expert advice
              and oversight in large corporate negotiations. Brings 10 years of
              experience in a wide variety of corporate law areas.b
            </h4>
          </div>
        </div>
        <div className="middle-content">
          <h1>MY PHILOSOPHY</h1>
          <p>
            Aggressive, ethical representation purposed to achieve the most
            favorable outcome recognizing the facts of each case, the applicable
            law, and the unique circumstances that each client brings.
          </p>
        </div>
        <div className="bottom-content">
          <section id="team" className="pb-5">
            <div className="container">
              <h1 className="section-title h1">Areas of Experties</h1>
              <div className="row">
                {experties.map((experty) => (
                  <AreasOfExpertyCard experty={experty} key={experty.id} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HomePage;
