import jobinairee from "../Images/HeroImage.png";
import Amazon from "../Images/Amazonlogo.png";
import Google from "../Images/Google.png";
import Pinterest from "../Images/Pinterest.png";
import Vector from "../Images/Vector.png";
import WeChat from "../Images/WeChat.png";
import SoftwareEngineer from "../Images/softwareengineer.png";
import Marketing from "../Images/marketing.png";
import CustomerService from "../Images/customerservice.png";
import Productdesigner from "../Images/productdesigner.png";
import Productmanager from "../Images/productmanager.png";
import Contentcreator from "../Images/contentcreator.png";
import Salesmarketing from "../Images/salesmarketing.png";
import Businessdeveloper from "../Images/businessdeveloper.png";
import Registeraccount from "../Images/registeraccount.png";
import Createresume from "../Images/createresume.png";
import Findmatchjobs from "../Images/findmatchjobs.png";
import Easyapply from "../Images/easyapply.png";

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
          <h2 class="pt-4">Job opportunities from leading companies</h2>
        </div>

        <div className="container">
          <div class="icons-sec columns is-small">
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
        <div className="container ">
          <div class="first-card-sec  container d-flex  mt-5 ">
            <div class="row">
              <div class="col-md-4">
                <div class="card1 p-3 ">
                  <div class="d-flex flex-row mb-3">
                    <img src={Productmanager} alt="" width="40" />
                  </div>
                  <h6>Product Manager</h6>
                  <div class="d-flex justify-content-between  mt-3">
                    <span>57 Vacancy</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card1 p-3">
                  <div class="d-flex flex-row mb-3">
                    <img src={Contentcreator} alt="" width="40" />
                  </div>
                  <h6>Content Creator</h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>74 Vacancy</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card1 p-3">
                  <div class="d-flex flex-row mb-3">
                    <img src={Salesmarketing} alt="" width="40" />
                  </div>
                  <h6>Sales $ Marketing</h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>126 Vacancy</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card1 p-3">
                  <div class="d-flex flex-row mb-3">
                    <img src={Businessdeveloper} alt="" width="40" />
                  </div>
                  <h6>Business Developer</h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>205 Vacancy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second card stack */}

        <div className="container ">
          <div class="first-card-sec  container d-flex  mt-1 ">
            <div class="row">
              <div class="col-md-4">
                <div class="card1 p-3 ">
                  <div class="d-flex flex-row mb-3">
                    <img src={Marketing} alt="" width="40" />
                  </div>
                  <h6>Marketing</h6>
                  <div class="d-flex justify-content-between  mt-3">
                    <span>142 Vacancy</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card1 p-3">
                  <div class="d-flex flex-row mb-3">
                    <img src={CustomerService} alt="" width="40" />
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
                <div class="card1 p-3">
                  <div class="d-flex flex-row mb-3">
                    <img src={SoftwareEngineer} alt="" width="40" />
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
                <div class="card1 p-3">
                  <div class="d-flex flex-row mb-3">
                    <img src={Productdesigner} alt="" width="40" />
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
                    <img src={Registeraccount} alt="" width="40" />
                  </div>
                  <h6>Register Account</h6>
                  <div class="Register-account-text d-flex justify-content-between install mt-3">
                    <span>
                      Register Account with few steps and get work opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img src={Createresume} alt="" width="40" />
                  </div>
                  <h6>Create Resume</h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>
                      Create a resume on Jobineer and get hired easily
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img src={Findmatchjobs} alt="" width="40" />
                  </div>
                  <h6>Find Matched Jobs</h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>
                      Filter your job search accordingly and receive various
                      offers
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card p-3">
                  <div class="d-flex flex-row mb-3">
                    <img src={Easyapply} alt="" width="40" />
                  </div>
                  <h6>Easy Apply</h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>
                      Apply for jobs with easy with your registered profile
                    </span>
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
