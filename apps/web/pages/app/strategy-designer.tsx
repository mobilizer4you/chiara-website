import React from "react";
import WebAppLayout from "../../components/Layout/WepAppLayout";
import StrategyCard from "../../components/StrategyCard";
import StrategyTheme from "../../components/StrategyTheme";

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
                      <button type="button" className="btn-view-changer active">
                        Themes
                      </button>
                      <button type="button" className="btn-view-changer">
                        Preset Screens
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-flex">
                  <StrategyTheme />
                  <StrategyTheme />
                  <StrategyTheme />
                  <StrategyTheme />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <h4 className="mt-3 mb-5">Expert Strategies</h4>
              <div className="filter-block">
                <div className="form-group">
                  <label className="from-label">Sort By</label>
                  <input type="text" className="form-control" title="Sort By" />
                </div>
              </div>
              <div className="row d-flex">
                <StrategyCard type="positive" />
                <StrategyCard type="negative" />
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
