import jobinairee from "../Images/HeroImage.png";
import Amazon from "../Images/Amazonlogo.png";
import Google from "../Images/Google.png";
import Pinterest from "../Images/Pinterest.png";
import Vector from "../Images/Vector.png";
import WeChat from "../Images/WeChat.png";

export const Home = () => {
  return (
    <div>
      <section className="home-hero-container">
        <div className="hero-left-div ">
          <h1>
            Land Your Dream <br />
            Job Today
          </h1>
          <h2>
            Welcome to Jobinairee, the Nigeria's leading <br />
            career portal for job hunters and employers.
          </h2>

          <button className="btn" type="button">
            Get Started
          </button>
        </div>

        <div className="hero-right-div">
          <img
            className="hero-illustration"
            src={jobinairee}
            alt="searching-web"
            width="100%"
            height="100%"
          />
        </div>
      </section>
      <section className="container-fluid">
        <div className="icons-div">
          <h2>Job opportunities from leading companies</h2>
        </div>

        <div className="container">
          <div class="columns is-small">
            <div class="column">
              <img src={Vector} alt="Bank-of-America-logo" />
            </div>
            <div class="column">
              <img src={Pinterest} alt="Pinterest-logo" />
            </div>
            <div class="column">
              <img src={Google} alt="Google-logo" />
            </div>
            <div class="column">
              <img src={Amazon} alt="Amazon-logo" />
            </div>
            <div class="column">
              <img src={WeChat} alt="WeChat-logo" />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="search-div container-fluid">
          <h2>Search For A Job </h2>
          <h3>
            Search for jobs from our selection
            <br /> of availble jobs
          </h3>
        </div>

        <div className="search-box container-fluid">
          <input
            className="search-box-text container-fluid"
            type="text"
            placeholder="Search For a Job"
          />
        </div>
      </section>

      {/* First Cards section */}

      <section>
        <div className="first-section-top-div-text">
          <h2>Explore by Categories</h2>
        </div>
        <div className="container">
          <div class="first-card-sec container d-flex  mt-5">
            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img
                      src="https://i.imgur.com/ccMhxvC.png"
                      alt=""
                      width="50"
                    />
                  </div>
                  <h6>Marketing</h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>142 Vacancy</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img
                      src="https://i.imgur.com/ccMhxvC.png"
                      alt=""
                      width="50"
                    />
                  </div>
                  <h6>Customer Service</h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>42 Vacancy</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img
                      src="https://i.imgur.com/ccMhxvC.png"
                      alt=""
                      width="50"
                    />
                  </div>
                  <h6>Software Engineer</h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>88 Vacancy</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img
                      src="https://i.imgur.com/ccMhxvC.png"
                      alt=""
                      width="50"
                    />
                  </div>
                  <h6>Product Designer</h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>105 Vacancy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Card Section */}

      <section>
        <div className="second-section-top-div-text">
          <h2>How it works</h2>
        </div>
        <div className="second-card-section">
          <div class="second-card container d-flex d-flex-row mt-5">
            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img
                      src="https://i.imgur.com/ccMhxvC.png"
                      alt=""
                      width="70"
                    />
                  </div>
                  <h6>
                    Get more context on your users with stripe data inside our
                    platform.
                  </h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>Installed 345 times</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img
                      src="https://i.imgur.com/ccMhxvC.png"
                      alt=""
                      width="70"
                    />
                  </div>
                  <h6>
                    Get more context on your users with stripe data inside our
                    platform.
                  </h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>Installed 345 times</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img
                      src="https://i.imgur.com/ccMhxvC.png"
                      alt=""
                      width="70"
                    />
                  </div>
                  <h6>
                    Get more context on your users with stripe data inside our
                    platform.
                  </h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>Installed 345 times</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img
                      src="https://i.imgur.com/ccMhxvC.png"
                      alt=""
                      width="70"
                    />
                  </div>
                  <h6>
                    Get more context on your users with stripe data inside our
                    platform.
                  </h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>Installed 345 times</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
