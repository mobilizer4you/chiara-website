import React from "react";
import WebAppLayout from "../../components/Layout/WepAppLayout";
import NewsLetterCard from "../../components/NewsLetterCard";
import NewsletterImage from "../../public/images/newsletter.svg";
import EmailIcon from "../../public/svg/email.svg";

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
                  <NewsletterImage />
                </div>
                <p>
                  Receive the latest market updates. Subscribe for free today!
                </p>
              </div>
              <div className="input-container-lg">
                <EmailIcon />
                <input type="email" placeholder="Enter your Email Address" />
              </div>
            </div>
          </div>
          <div className="row">
            <NewsLetterCard />
            <NewsLetterCard />
            <NewsLetterCard />
            <NewsLetterCard />
            <NewsLetterCard />
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
