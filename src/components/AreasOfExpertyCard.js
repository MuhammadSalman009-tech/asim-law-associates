import React from "react";
import { baseURL } from "./base-url";
import "../css/areaOfExpertyCard.css";
function AreasOfExpertyCard({ experty }) {
  return (
    <div className="col-xs-12 col-sm-6 col-lg-4">
      <div className="image-flip">
        <div className="mainflip flip-0">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    src={`${baseURL}images/${experty.image}`}
                    alt={experty.name}
                    height="180px"
                  />
                </p>
                <h4 className="card-title">{experty.name}</h4>
                <p className="card-text">{experty.title}</p>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">More On {experty.name}</h4>
                <p className="card-text">{experty.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreasOfExpertyCard;
