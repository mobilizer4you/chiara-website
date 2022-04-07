import React from "react";
import HomePageLayout from "../components/Layout/HomePageLayout";
import PricingFreeSvg from "../public/svg/pricingFree.svg";
import PricingLiteSvg from "../public/svg/pricingLite.svg";
import PricingMaxSvg from "../public/svg/pricingMax.svg";

const Pricing = () => {
  return (
    <div>
      <header
        style={{
          minHeight: 700,
        }}
      >
        <div className="container">
          <h1 className="big-title mb-5">Subscription Plans and Pricing</h1>
          <div className="col-md-8 col-xl-8 col-lg-8 mx-auto">
            <p className="text-center">
              We are a User-Owned Financial Management Platform dedicated to
              giving power to the people through trading, crypto, banking, and
              alternative investments.
            </p>
          </div>
        </div>
      </header>
      <section className="animate-container">
        <div className="floating1"></div>
        <div className="floating2"></div>
      </section>
      <section className="pricing">
        <div className="container">
          <div className="row row-equal">
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="plan plan-free">
                <div className="icon">
                  <PricingFreeSvg />
                </div>
                <h3 className="plan-name">Free</h3>
                <p className="plan-price">
                  <span>0</span>/mo
                </p>
                <p className="bill-duration">
                  Try <strong>7 days free!</strong>
                  <br />
                  No Credit card required.
                </p>
                <ul className="pricing-features mx-auto">
                  <li>Chart Analyzer</li>
                  <li>Buzz Portal</li>
                  <li>Education on demand</li>
                  <li>Fundamental Analyzer</li>
                  <li>Newsbriefs</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="plan plan-lite">
                <div className="icon">
                  <PricingLiteSvg />
                </div>
                <h3 className="plan-name">Lite</h3>
                <p className="plan-price">
                  <span>14.99</span>/mo
                </p>
                <p className="bill-duration">
                  <strong>$159.89</strong>
                  <br />
                  Billed Yearly <span className="save-tag">Save 15%</span>
                </p>
                <ul className="pricing-features mx-auto">
                  <li>Chart Analyzer</li>
                  <li>Buzz Portal</li>
                  <li>Education on demand</li>
                  <li>Fundamental Analyzer</li>
                  <li>Newsbriefs</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="plan plan-max">
                <div className="icon">
                  <PricingMaxSvg />
                </div>
                <h3 className="plan-name">Max</h3>
                <p className="plan-price">
                  <span>19.99</span>/mo
                </p>
                <p className="bill-duration">
                  <strong>$219.89/</strong>
                  <br />
                  Billed Yearly <span className="save-tag">Save 35%</span>
                </p>
                <ul className="pricing-features mx-auto">
                  <li>Chart Analyzer</li>
                  <li>Buzz Portal</li>
                  <li>Education on demand</li>
                  <li>Fundamental Analyzer</li>
                  <li>Newsbriefs</li>
                  <li>Strategy Newsletter</li>
                  <li>Tailored Ideas</li>
                  <li>Strategy Builder</li>
                  <li>Economic Insight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Pricing.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Pricing;
