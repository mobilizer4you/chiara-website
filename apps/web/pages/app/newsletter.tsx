import React from "react";
import WebAppLayout from "../../components/Layout/WepAppLayout";
import NewsletterImage from "../../public/images/newsletter.svg";

const Newsletter = () => {
  return (
    <>
      <header className="webapp-header">
        <div className="container">
          <div className="shape" id="moon"></div>
        </div>
      </header>
      <section className="newsletter-container">
        <div className="container">
          <div className="row">
            <h2>Newsletter</h2>
          </div>
          <div className="row">
            <div className="col-md-5 col-lg-5 col-xl-5">
              <div className="news-disclaimer">
                <div className="icon-holder">
                  <NewsletterImage></NewsletterImage>
                </div>
                <p>
                  Receive the latest market updates. Subscribe for free today!
                </p>
              </div>
              <div className="input-container-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input type="email" placeholder="Enter your Email Address" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="card-news">
                <div className="card-img">
                  <img src="https://picsum.photos/seed/picsum/500/250" alt="" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Daily ETF Market Report</h4>
                  <a href="#">See an Example</a>
                  <button className="subscribe-news">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="card-news">
                <div className="card-img">
                  <img src="https://picsum.photos/seed/picsum/500/250" alt="" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Daily ETF Market Report</h4>
                  <a href="#">See an Example</a>
                  <button className="subscribe-news">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="card-news">
                <div className="card-img">
                  <img src="https://picsum.photos/seed/picsum/500/250" alt="" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Daily ETF Market Report</h4>
                  <a href="#">See an Example</a>
                  <button className="subscribe-news">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="card-news">
                <div className="card-img">
                  <img src="https://picsum.photos/seed/picsum/500/250" alt="" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Daily ETF Market Report</h4>
                  <a href="#">See an Example</a>
                  <button className="subscribe-news">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="card-news">
                <div className="card-img">
                  <img src="https://picsum.photos/seed/picsum/500/250" alt="" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Daily ETF Market Report</h4>
                  <a href="#">See an Example</a>
                  <button className="subscribe-news">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Newsletter.getLayout = function getLayout(page: React.ReactElement) {
  return <WebAppLayout>{page}</WebAppLayout>;
};
export default Newsletter;
