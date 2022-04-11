import React from "react";
import WebAppLayout from "../../components/Layout/WepAppLayout";
import Logo from "../../../web/public/images/logo.svg";
import SearchIcon from "../../../web/public/images/icon-search.svg";
// import DatePicker from "../../web/public/images/date.svg";

const EconomicInsight = () => {
  return (
    <>
      <header className="webapp-header">
        <div className="cotainer">
          <div className="shape" id="moon"></div>
        </div>
      </header>
      <section className="economic-container">
        <div className="container">
          <div className="row mb-5">
            <h2>Econmic Insight</h2>
            <div className="search-ticker-buzz col-md-7 col-xl-7 col-lg-7">
              <label htmlFor="">Enter name of the economic event</label>
              <div className="input-container-lg">
                <input id="search" type="text" title="search" />
                <SearchIcon></SearchIcon>
              </div>
            </div>
            <div className="btn-series">
              <button className="active">Recent & Next</button>
              <button>Today</button>
              <button>Tomorrow</button>
              <button>This Week</button>
              <button>Next Week</button>
              <button>This Month</button>
              <button>Next Month</button>
              <div className="date-range-container">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4V4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z"
                    fill="white"
                  />
                </svg>
                <input type="date" className="date-input" />
                <input type="date" className="date-input" />
              </div>
            </div>
          </div>
          <div className="uni-container">
            <p className="event-identifier">28 Events</p>
            <div className="row">
              <div className="col-md-3 col-xl-3 col-lg-3">
                <div className="filter-events">
                  <h4 className="mb-4">Filters</h4>
                  <div className="button-pack">
                    <button type="button" className="btn-view-changer active">
                      LOW
                    </button>
                    <button type="button" className="btn-view-changer">
                      MEDIUM
                    </button>
                    <button type="button" className="btn-view-changer">
                      HIGH
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-xl-9 col-lg-9">
                <div className="economic-calender">
                  <div className="table-ec-head"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

EconomicInsight.getLayout = function getLayout(page: React.ReactElement) {
  return <WebAppLayout>{page}</WebAppLayout>;
};
export default EconomicInsight;
