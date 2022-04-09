import React from "react";
import { useRouter } from "next/router";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from "react-bootstrap/ProgressBar";
import WebAppLayout from "../../components/Layout/WepAppLayout";
import { ROUTES } from "../../utils/utils";
import Logo from "../../../web/public/images/logo.svg";
import SearchIcon from "../../../web/public/images/icon-search.svg";
import TableIcon from "../../../web/public/svg/table.svg";
import BubbleIcon from "../../../web/public/svg/bubble.svg";
import VisuallyHidden from "../../components/VisuallyHidden";
import BuzzPortalTable from "../../components/BuzzPortalTable";

const BuzzPortal = () => {
  return (
    <>
      <header className="webapp-header">
        <div className="container">
          <div className="shape" id="moon"></div>
        </div>
      </header>
      <section className="buzz-portal-container">
        <div className="container">
          <div className="row">
            <h2>BUZZ PORTAL</h2>
            <div className="search-ticker-buzz col-md-7 col-xl-7 col-lg-7">
              <label htmlFor="">Enter name of the economic event</label>
              <div className="input-container-lg">
                <input id="search" type="text" title="search" />
                <SearchIcon></SearchIcon>
              </div>
            </div>
          </div>
          <div className="uni-container">
            <Tabs
              defaultActiveKey="stocks"
              id="buzzportal-tab"
              className="mb-3 cstm-tabs"
            >
              <Tab eventKey="stocks" title="Stocks">
                <div className="row mt-4">
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <div className="button-pack">
                      <button className="btn-view-changer active">
                        <TableIcon />
                        Table
                      </button>
                      <button className="btn-view-changer">
                        <BubbleIcon />
                        Bubbles
                      </button>
                    </div>
                    <div className="filter-block">
                      <div className="form-group">
                        <label className="form-label">Countries</label>
                        <select
                          name="country"
                          id="country"
                          title="Select Country"
                          className="form-control"
                        >
                          <option value="">USA</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          Selector & Industries
                        </label>
                        <select
                          name="selectorIndustry"
                          id="selectorIndustry"
                          title="Select Industry"
                          className="form-control"
                        >
                          <option value="">All</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Bubble Size</label>
                        <select
                          name="bubbleSize"
                          id="bubbleSize"
                          className="form-control"
                          title="Bubble Size"
                        >
                          <option value="">New Volume (24h)</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Bubble Color</label>
                        <select
                          name="bubbleColor"
                          id="bubbleColor"
                          className="form-control"
                          title="Bubble Color"
                        >
                          <option value="">Default</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 col-lg-9 col-xl-9">
                    <BuzzPortalTable />
                  </div>
                </div>
              </Tab>
              <Tab eventKey="cryptos" title="Cryptos"></Tab>
              <Tab eventKey="currencies" title="Currencies"></Tab>
              <Tab eventKey="commodities" title="Commodities"></Tab>
              <Tab eventKey="indices" title="Indices"></Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

BuzzPortal.getLayout = function getLayout(page: React.ReactElement) {
  return <WebAppLayout>{page}</WebAppLayout>;
};

export default BuzzPortal;
