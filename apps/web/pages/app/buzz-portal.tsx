import React from "react";
import { useRouter } from "next/router";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from "react-bootstrap/ProgressBar";
import WebAppLayout from "../../components/Layout/WepAppLayout";
import { ROUTES } from "../../utils/utils";
import Logo from "../../../web/public/images/logo.svg";
import SearchIcon from "../../../web/public/images/icon-search.svg";
import VisuallyHidden from "../../components/VisuallyHidden";

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
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.75 1.5H2.25C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V15.75C1.5 15.9489 1.57902 16.1397 1.71967 16.2803C1.86032 16.421 2.05109 16.5 2.25 16.5H15.75C15.9489 16.5 16.1397 16.421 16.2803 16.2803C16.421 16.1397 16.5 15.9489 16.5 15.75V2.25C16.5 2.05109 16.421 1.86032 16.2803 1.71967C16.1397 1.57902 15.9489 1.5 15.75 1.5ZM6 15H3V12H6V15ZM6 10.5H3V7.5H6V10.5ZM6 6H3V3H6V6ZM10.5 15H7.5V12H10.5V15ZM10.5 10.5H7.5V7.5H10.5V10.5ZM10.5 6H7.5V3H10.5V6ZM15 15H12V12H15V15ZM15 10.5H12V7.5H15V10.5ZM15 6H12V3H15V6Z"
                            fill="#626587"
                          />
                        </svg>
                        Table
                      </button>
                      <button className="btn-view-changer">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.2499 1.49976C10.0221 1.50076 8.83356 1.932 7.89083 2.71852C6.94811 3.50504 6.31085 4.59708 6.08986 5.80476C5.44368 6.15338 4.89261 6.65481 4.48474 7.26531C4.07686 7.87582 3.82457 8.57685 3.74986 9.30726C3.19166 9.5528 2.70177 9.93075 2.32264 10.4084C1.94351 10.886 1.68657 11.4489 1.5741 12.0482C1.46163 12.6476 1.49702 13.2653 1.6772 13.8479C1.85738 14.4305 2.17692 14.9603 2.60812 15.3915C3.03931 15.8227 3.56916 16.1422 4.15174 16.3224C4.73432 16.5026 5.35206 16.538 5.9514 16.4255C6.55075 16.313 7.11362 16.0561 7.59124 15.677C8.06886 15.2978 8.44682 14.808 8.69236 14.2498C9.42061 14.1774 10.1202 13.9285 10.7305 13.5247C11.3409 13.1208 11.8435 12.5742 12.1949 11.9323C13.508 11.7216 14.6923 11.0204 15.5085 9.9703C16.3247 8.9202 16.7119 7.59947 16.5919 6.27492C16.4719 4.95036 15.8537 3.72071 14.8621 2.83436C13.8705 1.94801 12.5795 1.47102 11.2499 1.49976V1.49976ZM7.49986 13.0723C7.49986 13.1473 7.49986 13.2223 7.44736 13.3048C7.35048 13.6908 7.15294 14.0442 6.8749 14.329C6.59686 14.6137 6.24825 14.8197 5.86465 14.9257C5.48105 15.0318 5.07618 15.0342 4.69134 14.9327C4.3065 14.8312 3.95546 14.6295 3.67404 14.3481C3.39261 14.0667 3.19087 13.7156 3.08939 13.3308C2.98792 12.9459 2.99033 12.5411 3.0964 12.1575C3.20246 11.7739 3.40838 11.4253 3.69315 11.1472C3.97791 10.8692 4.33133 10.6716 4.71736 10.5748V10.5748L4.92736 10.4998C5.27954 10.434 5.64246 10.455 5.9847 10.5609C6.32694 10.6669 6.6382 10.8547 6.89154 11.1081C7.14488 11.3614 7.33268 11.6727 7.43867 12.0149C7.54466 12.3572 7.56566 12.7201 7.49986 13.0723ZM11.2499 10.3198C11.24 10.3679 11.2274 10.4155 11.2124 10.4623C11.1801 10.6003 11.1375 10.7357 11.0849 10.8673C10.9122 11.3051 10.6389 11.6962 10.2871 12.0089C9.93535 12.3216 9.51493 12.5471 9.05986 12.6673C9.05986 12.5323 9.05986 12.4048 9.01486 12.2698C8.96986 12.1348 9.01486 12.0673 9.01486 11.9698C9.01486 11.8723 8.92486 11.6848 8.87986 11.5423C8.83486 11.3998 8.82736 11.3623 8.78986 11.2723C8.7252 11.1294 8.65 10.9915 8.56486 10.8598C8.56486 10.7923 8.49736 10.7173 8.45236 10.6498C8.31896 10.4542 8.16836 10.271 8.00236 10.1023L7.85236 9.97476C7.72663 9.85917 7.59388 9.75146 7.45486 9.65226C7.37314 9.5991 7.28795 9.55149 7.19986 9.50976C7.07981 9.43346 6.9545 9.36579 6.82486 9.30726C6.72799 9.26582 6.62758 9.23319 6.52486 9.20976C6.39859 9.15852 6.26809 9.11837 6.13486 9.08976C6.02986 9.08976 5.91736 9.08976 5.80486 9.04476L5.34736 8.99976C5.46674 8.54546 5.69114 8.12555 6.00248 7.77382C6.31382 7.4221 6.7034 7.1484 7.13986 6.97476C7.26849 6.92104 7.40147 6.87839 7.53736 6.84726L7.68736 6.80976C7.87235 6.77086 8.06081 6.75076 8.24986 6.74976C9.04551 6.74976 9.80857 7.06583 10.3712 7.62844C10.9338 8.19105 11.2499 8.95411 11.2499 9.74976C11.2489 9.94128 11.2288 10.1322 11.1899 10.3198H11.2499ZM12.7499 10.1998C12.7499 10.0498 12.7499 9.89976 12.7499 9.74976C12.7499 8.55629 12.2757 7.4117 11.4318 6.56778C10.5879 5.72387 9.44333 5.24976 8.24986 5.24976C8.09986 5.24976 7.94986 5.24976 7.79986 5.24976C8.04707 4.69367 8.42591 4.20611 8.90367 3.82915C9.38143 3.45219 9.94375 3.19717 10.5421 3.0861C11.1404 2.97503 11.7568 3.01126 12.338 3.19164C12.9192 3.37202 13.4478 3.69115 13.8781 4.12147C14.3085 4.55179 14.6276 5.08037 14.808 5.66159C14.9884 6.2428 15.0246 6.85919 14.9135 7.45753C14.8024 8.05587 14.5474 8.61819 14.1705 9.09595C13.7935 9.57371 13.3059 9.95255 12.7499 10.1998V10.1998Z"
                            fill="white"
                          />
                        </svg>
                        Bubbles
                      </button>
                    </div>
                    <div className="filter-block">
                      <div className="form-group">
                        <label className="form-label">Countries</label>
                        <select name="" id="" className="form-control">
                          <option value="">USA</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          Selector & Industries
                        </label>
                        <select name="" id="" className="form-control">
                          <option value="">All</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Bubble Size</label>
                        <select name="" id="" className="form-control">
                          <option value="">New Volume (24h)</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Bubble Color</label>
                        <select name="" id="" className="form-control">
                          <option value="">Default</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 col-lg-9 col-xl-9">
                    <table className="table table-borderless table-cstm">
                      <thead>
                        <tr>
                          <th>Symbol</th>
                          <th>Name</th>
                          <th>Industry</th>
                          <th>News Volume</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>AMAZN</td>
                          <td>Amazon.com.inc</td>
                          <td>Retail-Cyclical</td>
                          <td>
                            <div className="cstm-progress">
                              <span>169</span>
                              <ProgressBar variant="info" now={100} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>AMAZN</td>
                          <td>Amazon.com.inc</td>
                          <td>Retail-Cyclical</td>
                          <td>
                            <div className="cstm-progress">
                              <span>169</span>
                              <ProgressBar variant="info" now={65} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>AMAZN</td>
                          <td>Amazon.com.inc</td>
                          <td>Retail-Cyclical</td>
                          <td>
                            <div className="cstm-progress">
                              <span>169</span>
                              <ProgressBar variant="info" now={32} />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
