import React from "react";
import WebAppLayout from "../../components/Layout/WepAppLayout";
import NewsletterImage from "../../public/images/newsletter.svg";

const StrategyDesigner = () => {
  return (
    <>
      <header className="webapp-header">
        <div className="container">
          <div className="shape" id="moon"></div>
        </div>
      </header>
      <section className="strategy-container">
        <div className="container">
          <div className="row">
            <h2>Strategy Designer</h2>
            <p className="sub-head">
              Discrover Expert strategies & Popular themes that inspires you
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-md-8 col-lg-8 col-xl-8">
              <div className="uni-container">
                <div className="row">
                  <div className="col-md-4 col-xl-4 col-lg-4">
                    <h4 className="mb-3">Explore</h4>
                    <div className="button-pack">
                      <button className="btn-view-changer active">
                        Themes
                      </button>
                      <button className="btn-view-changer">
                        Preset Screens
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-flex">
                  <div className="col-md-4 col-lg-4 col-xl-4">
                    <img
                      src="https://picsum.photos/358/200"
                      className="img-fluid"
                      alt=""
                    />
                    <p>5G</p>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-4">
                    <img
                      src="https://picsum.photos/358/200"
                      className="img-fluid"
                      alt=""
                    />
                    <p>5G</p>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-4">
                    <img
                      src="https://picsum.photos/358/200"
                      className="img-fluid"
                      alt=""
                    />
                    <p>5G</p>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-4">
                    <img
                      src="https://picsum.photos/358/200"
                      className="img-fluid"
                      alt=""
                    />
                    <p>5G</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <h4 className="mt-3 mb-5">Expert Strategies</h4>
              <div className="filter-block">
                <div className="form-group">
                  <label className="from-label">Sort By</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row d-flex">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="strategy-card">
                    <h5>Small Cap Price Trenders with Substancial</h5>
                    <label htmlFor="">Matches</label>
                    <strong className="value">7</strong>
                    <label htmlFor="">Annualized Return</label>
                    <strong className="value positive">34.7%</strong>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="strategy-card">
                    <h5>Small Cap Price Trenders with Substancial</h5>
                    <label htmlFor="">Matches</label>
                    <strong className="value">7</strong>
                    <label htmlFor="">Annualized Return</label>
                    <strong className="value negetive">-12.3%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

StrategyDesigner.getLayout = function getLayout(page: React.ReactElement) {
  return <WebAppLayout>{page}</WebAppLayout>;
};

export default StrategyDesigner;
