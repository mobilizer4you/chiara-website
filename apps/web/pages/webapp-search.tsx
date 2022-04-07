import React from "react";
import WebAppLayout from "../components/Layout/WepAppLayout";
import Logo from "../../web/public/images/logo.svg";
import SearchIcon from "../../web/public/images/icon-search.svg";

const Search = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="shape" id="moon"></div>
        </div>
      </header>
      <section className="search-ticker-container">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-xl-8 mx-auto">
              <div className="logo-center">
                <Logo></Logo>
              </div>
              <div className="search-ticker-box">
                <SearchIcon></SearchIcon>
                <input
                  type="text"
                  placeholder="Enter a ticker symbol or choose on from dropdown"
                />
              </div>
              <p className="trending-flow">
                Whats trending: <span>ITC</span> <span>TENOR</span>{" "}
                <span>APPLE</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Search.getLayout = function getLayout(page: React.ReactElement) {
  return <WebAppLayout>{page}</WebAppLayout>;
};

export default Search;
