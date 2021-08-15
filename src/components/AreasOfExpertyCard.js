import React from "react";
import { baseURL } from "./base-url";
import "../css/areaOfExpertyCard.css";
function AreasOfExpertyCard({ experty }) {
  return (
    <div class="col-xs-12 col-sm-6 col-md-4">
      <div class="image-flip">
        <div class="mainflip flip-0">
          <div class="frontside">
            <div class="card">
              <div class="card-body text-center">
                <p>
                  <img
                    class=" img-fluid"
                    src={`${baseURL}images/${experty.image}`}
                    alt={experty.name}
                  />
                </p>
                <h4 class="card-title">{experty.name}</h4>
                <p class="card-text">{experty.title}</p>
              </div>
            </div>
          </div>
          <div class="backside">
            <div class="card">
              <div class="card-body text-center mt-4">
                <h4 class="card-title">More On {experty.name}</h4>
                <p class="card-text">{experty.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreasOfExpertyCard;
