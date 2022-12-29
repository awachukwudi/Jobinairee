import React from "react";
import Marketing from "../components/Images/marketing.png";

export const Card = () => {
  return (
    <div>
      <div className="container">
        <div className="first-section-top-div-text">
          <h2>Explore by Categories</h2>
        </div>
        <div class="first-card-sec container d-flex  mt-5 ">
          <div class="row ">
            <div class="col-md-4">
              <div class="card1 p-3 ">
                <div class="d-flex flex-row mb-3">
                  <img src={Marketing} alt="" width="50" />
                </div>
                <h6>Marketing</h6>
                <div class="d-flex justify-content-between install mt-3">
                  <span>142 Vacancy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
