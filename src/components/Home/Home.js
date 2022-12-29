import "./Home.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import jobinairee from "../Images/HeroImage.png";
import Cowrywise from "../Images/cowrywise.png";
import Uba from "../Images/uba.png";
import Softcom from "../Images/softcom.png";
import Piggyvest from "../Images/piggyvest.png";
import Accessbank from "../Images/accessbank.png";
import SoftwareEngineer from "../Images/softwareengineer.png";
import Marketing from "../Images/marketing.png";
import CustomerService from "../Images/customerservice.png";
import Productdesigner from "../Images/productdesigner.png";
import Productmanager from "../Images/productmanager.png";
import Contentcreator from "../Images/contentcreator.png";
import Salesmarketing from "../Images/salesmarketing.png";
import Businessdeveloper from "../Images/businessdeveloper.png";
import logo from "../Images/logo1.png";

import BootstrapCarousel from "../BootstrapCarousel";
import HowItWorksCard from "../HowItWorksCard";
import Seenstarlogo from "../Images/seen star logo.png";
import Bellicon from "../Images/bellicon.png";
import SearchBox from "../SearchBox";

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

          <button className="btn btn-primary py-2 px-5 " type="button">
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

        <div className="icons-section container">
          <div class="icons-sec columns is-small">
            <div class="column">
              <img src={Piggyvest} alt="Piggyvest-logo" />
            </div>
            <div class="column">
              <img src={Softcom} alt="Softcom-logo" />
            </div>
            <div class="column">
              <img src={Uba} alt="Uba-logo" />
            </div>
            <div class="column">
              <img src={Cowrywise} alt="Cowrywise-logo" />
            </div>
            <div class="column">
              <img src={Accessbank} alt="Accessbank-logo" />
            </div>
          </div>
        </div>

        <div class="first-section-bottom-text">
          <Link>
            <h2>View All Companies Hiring</h2>
          </Link>
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

        <div className="SearchBox container-fluid ">
          <SearchBox />
        </div>
      </section>

      {/* First Cards section */}

      <section>
        <div className="first-card-section-top-div-text">
          <h2>Explore by Categories</h2>
        </div>
        <div className="container ">
          <div class="first-card-sec  container d-flex ">
            <Link>
              <div class="row">
                <div class="col-md-4">
                  <div class="card1 p-3 ">
                    <div class="d-flex flex-row mb-3">
                      <img src={Productmanager} alt="..." width="40" />
                    </div>
                    <h6>Product Manager</h6>
                    <div class="d-flex justify-content-between  mt-3">
                      <span>57 Vacancy</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link>
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
            </Link>

            <Link>
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
            </Link>

            <Link>
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
            </Link>
          </div>
        </div>

        {/* second card stack */}

        <div className=" secondstackcard container ">
          <div class="first-card-sec  container d-flex  mt-4 ">
            <Link>
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
            </Link>

            <Link>
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
            </Link>

            <Link>
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
            </Link>

            <Link>
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
            </Link>
          </div>
        </div>

        <div class="first-card-section-bottom-text">
          <Link>
            <h3>Explore Other Categories</h3>
          </Link>
        </div>
      </section>

      {/* Second Card Section */}

      <section>
        <div className="second-section-top-div-text">
          <h2>How it works</h2>
        </div>

        <div className="second-card-section">
          <div class="second-card container d-flex d-flex-row mt-5">
            <Link>
              <HowItWorksCard />
            </Link>

            <Link>
              <HowItWorksCard />
            </Link>

            <Link>
              <HowItWorksCard />
            </Link>

            <Link>
              <HowItWorksCard />
            </Link>
          </div>
        </div>
      </section>

      {/* Third section first card stack */}

      <section>
        <div className="third-section">
          <div className="container3 ">
            <div class="first-card-sec  container d-flex  mt-5 ">
              <Card
                className="third-section-card"
                style={{ width: "32rem", height: "20rem" }}
              >
                <Card.Body className="Card-text">
                  <Card.Title>
                    <h2>
                      There is more to explore with <br />
                      Jobinairee
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    <h4>
                      Create a free account, complete your profile, <br />
                      and get matched with your dream job
                    </h4>
                  </Card.Text>
                  <Card.Link href="#">
                    <button
                      class="Card-link btn btn-primary py-2 px-5 "
                      id="btn-third-card"
                    >
                      Get Started
                    </button>
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card
                className="third-section-card"
                style={{ width: "32rem", height: "20rem" }}
              >
                <Card.Body className="Card-text">
                  <Card.Title>
                    <h2>
                      There is more to explore with <br />
                      Jobinairee
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    <h4>
                      Create a free account, complete your profile, <br />
                      and get matched with your dream job
                    </h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* Third section second card stack */}

          <div className="container3">
            <div class="first-card-sec  container d-flex  mt-1 ">
              <Card
                className="third-section-card"
                style={{ width: "32rem", height: "20rem" }}
              >
                <Card.Body className="Card-text">
                  <Card.Title>
                    <img src={Seenstarlogo} alt="" width="40" />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <h2>Get seen by employers</h2>
                  </Card.Subtitle>
                  <Card.Text>
                    <h4>
                      With a complete profile, your <br />
                      applications and profile are promoted <br />
                      to top employers, so you can stand out
                    </h4>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                className="third-section-card"
                style={{ width: "32rem", height: "20rem" }}
              >
                <Card.Body className="Card-text">
                  <Card.Title>
                    <img src={Bellicon} alt="Bell-icon" width="40" />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <h2>Get access to top jobs first</h2>
                  </Card.Subtitle>
                  <Card.Text>
                    <h4>
                      Sign up for the job alerts and be first in line for the
                      latest jobs that match your profile
                    </h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Card carousel section */}

      <section className="clients-testimony-section">
        <div className="client-text">
          <h3>Our Client Says!!!</h3>
        </div>
        <BootstrapCarousel />
      </section>

      <section>
        <div className="Explore-other-job-function-text">
          <h3>Explore other job function</h3>
        </div>

        <div className="a">
          <div className="first-div">
            <a href="...">
              <li>Admin & Office</li>
            </a>

            <a href="...">
              <li>Building & Architecture</li>
            </a>

            <a href="...">
              <li>Customer & Support</li>
            </a>

            <a href="...">
              <li>Consulting & Strategy</li>
            </a>

            <a href="...">
              <li>Estate Agent</li>
            </a>

            <a href="...">
              <li>Engineering</li>
            </a>
          </div>

          <div className="second-div">
            <a href="...">
              <li>Human Resource</li>
            </a>

            <a href="...">
              <li>Legal Service</li>
            </a>

            <a href="...">
              <li>Social Services</li>
            </a>

            <a href="...">
              <li>Transport Services</li>
            </a>

            <a href="...">
              <li>Management & Business Development</li>
            </a>

            <a href="...">
              <li>Marketing & Communication</li>
            </a>
          </div>

          <div className="third-div">
            <a href="...">
              <li>Marketing & Communication</li>
            </a>

            <a href="...">
              <li>Product Management </li>
            </a>

            <a href="...">
              <li>Quality Control & Assurance</li>
            </a>

            <a href="...">
              <li>Research & Training</li>
            </a>

            <a href="...">
              <li>Sales</li>
            </a>

            <a href="...">
              <li>Software & Data</li>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-top-div-container">
          <div>
            <img src={logo} alt="footer-logo" width="100"></img>
          </div>

          <div className="company-div-container">
            <h1 className="Company-text mb-4">Company</h1>
            <ul>
              <li>About</li>
              <li>Our Services</li>
              <li>Policy Privacy</li>
              <li>Contact us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div className="Help-div-container">
            <h1 className="Help-text mb-4">Help</h1>
            <ul>
              <li>FAQs</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>

          <div className="Resources-div-container">
            <h1 className="Resources-text mb-4">Resources</h1>
            <ul>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
