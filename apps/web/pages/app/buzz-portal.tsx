import React from "react";
import { useRouter } from "next/router";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import WebAppLayout from "../../components/Layout/WepAppLayout";
import { ROUTES } from "../../utils/utils";
import Logo from "../../../web/public/images/logo.svg";
import SearchIcon from "../../../web/public/images/icon-search.svg";

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
                <input type="text" />
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
                <div>test subject</div>
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
