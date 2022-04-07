import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import HomePageLayout from "../components/Layout/HomePageLayout";
import ChartAnalyzerSvg from "../public/svg/chartAnalyzer.svg";
import EducationOnDemandSvg from "../public/svg/educationOnDemand.svg";
import BuzzPortalSvg from "../public/svg/buzzPortal.svg";
import StrategyBuilderSvg from "../public/svg/strategyBuilder.svg";
import EconomicInsightSvg from "../public/svg/economicInsight.svg";
import NewsletterSvg from "../public/svg/newsLetter.svg";
import TailoredIdeaSvg from "../public/svg/tailoredIdeas.svg";
import FundamentalInsightSvg from "../public/svg/fundamentalInsight.svg";

const Features = () => {
  const carouselRef = React.useRef<any | null>(null);
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const goNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  const goPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };
  const goToSlide = (index: number) => {
    setIndex(index);
  };
  const isActive = (buttonIndex: number) => {
    return index === buttonIndex ? "active" : null;
  };
  return (
    <div>
      <header>
        <div className="container">
          <div className="shape" id="moon"></div>
          <h1 className="big-title mb-5">Features</h1>
        </div>
      </header>
      <section className="animate-container">
        <div className="floating1"></div>
        <div className="floating2"></div>
      </section>
      <section className="feature">
        <div className="container">
          <div className="col-lg-8 col-md-8 col-sm-12 mx-auto">
            <div
              id="carouselExampleIndicators"
              className="carousel slide carousel-fade cstm-carousel-inner"
              data-ride="carousel"
            >
              <div className="carousel-indicators cstm-indicators">
                <button
                  type="button"
                  className={isActive(0)}
                  data-bs-slide-to="0"
                  aria-current="true"
                  aria-label="Slide 1"
                  onClick={() => goToSlide(0)}
                >
                  <ChartAnalyzerSvg />
                  <span>Chart Analyzer</span>
                </button>
                <button
                  type="button"
                  className={isActive(1)}
                  aria-label="Slide 2"
                  onClick={() => goToSlide(1)}
                >
                  <EducationOnDemandSvg />
                  <span>Education-on-demand</span>
                </button>
                <button
                  type="button"
                  className={isActive(2)}
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  onClick={() => goToSlide(2)}
                >
                  <BuzzPortalSvg />
                  <span>Buzz Portal</span>
                </button>
                <button
                  type="button"
                  className={isActive(3)}
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                  onClick={() => goToSlide(3)}
                >
                  <StrategyBuilderSvg />
                  <span>Strategy Builder</span>
                </button>
                <button
                  type="button"
                  className={isActive(4)}
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                  onClick={() => goToSlide(4)}
                >
                  <EconomicInsightSvg />
                  <span>Economic Insight</span>
                </button>
                <button
                  type="button"
                  className={isActive(5)}
                  data-bs-slide-to="5"
                  aria-label="Slide 6"
                  onClick={() => goToSlide(5)}
                >
                  <NewsletterSvg />
                  <span>Newsletter</span>
                </button>
                <button
                  type="button"
                  className={isActive(6)}
                  data-bs-slide-to="6"
                  aria-label="Slide 7"
                  onClick={() => goToSlide(6)}
                >
                  <TailoredIdeaSvg />
                  <span>Tailored Ideas</span>
                </button>
                <button
                  type="button"
                  className={isActive(7)}
                  data-bs-slide-to="7"
                  aria-label="Slide 8"
                  onClick={() => goToSlide(7)}
                >
                  <FundamentalInsightSvg />
                  <span>Fundamental Analyzer</span>
                </button>
              </div>
              <Carousel
                as="section"
                fade
                ref={carouselRef}
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
              >
                <Carousel.Item>
                  <div>
                    <img
                      src="./images/slide1.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <Carousel.Caption className=" d-none d-md-block cstm-caption">
                    <h3 className="mb-3">Chart Analyzer</h3>
                    <p>
                      Learn the science of technical analysis with our
                      insightful chart breakdowns and explanations. We&apos;ll
                      help you understand candlestick patterns, find support and
                      resistance, set your price stop and even set alerts to
                      keep you updated on your favorite stocks&apos; movement.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./images/slide2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption className=" d-none d-md-block cstm-caption">
                    <h3 className="mb-3">Education-on-demand</h3>
                    <p>
                      Learn about technical analysis from world renowned market
                      technician, Martin Pring, and quiz yourself on your
                      knowledge.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./images/slide3.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption className=" d-none d-md-block cstm-caption">
                    <h3 className="mb-3">Buzz Portal</h3>
                    <p>
                      We hate following the crowd here at TikStock, but when it
                      comes to trading it is necessary to know which stocks have
                      the best gossip. Buzz Portal will sort through the
                      thousands of useless articles plaguing the internet and
                      give users an accurate (and aesthetically impressive)
                      portrait of a stock&apos;s sentiment, only from the most
                      reliable sources.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./images/slide4.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption className=" d-none d-md-block cstm-caption">
                    <h3 className="mb-3">Strategy Builder</h3>
                    <p>
                      No matter if you&apos;re buying long, selling short, or
                      what your fundamental and technical preferences are, just
                      filter them in and we&apos;ll provide you with baskets of
                      backtested strategies to expand your portfolio. We&apos;ll
                      display the expected returns and even alert you if a stock
                      makes the cut or if one falls short.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./images/slide5.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption className=" d-none d-md-block cstm-caption">
                    <h3 className="mb-3">Economic Insight</h3>
                    <p>
                      Take control of your investments by adding real-time,
                      macro-economic events to your personal calendar. With
                      indices and over 115 FX charts tied to economic events,
                      you&apos;ll be able to act quickly if needed. Check out an
                      event&apos;s historical impact and determine your ideal
                      stop-loss to never miss a trading opportunity.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./images/slide6.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption className=" d-none d-md-block cstm-caption">
                    <h3 className="mb-3">Newsletter</h3>
                    <p>
                      Crypto trade ideas, European market outlook, juicy market
                      news, pre-market stock ideas and more sent directly to
                      your inbox. Just choose what interests you and we&apos;ll
                      keep you informed and up to date with timely, fact-checked
                      newsletters.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./images/slide7.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption className=" d-none d-md-block cstm-caption">
                    <h3 className="mb-3">Tailored Ideas</h3>
                    <p>
                      We&apos;ll find you personalized backtested trade
                      opportunities tailored to your technical and fundamental
                      style, favorite sector, holding timeframe, and more.
                      Interact with them on real-time charts and receive
                      transparent explanations of what we found, helping you
                      foster a technical analysis foundation.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./images/slide8.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <Carousel.Caption className=" d-none d-md-block cstm-caption">
                    <h3 className="mb-3">Fundamental Analyzer</h3>
                    <p>
                      With the aesthetic of buzz portal analyzer will provide
                      you with an overall rating based on a stock&apos;s
                      fundamental health (Growth, value, income, quality, and
                      momentum). Learn how a stock is rated based on different
                      economic cycles, how it compares to its peers and what its
                      key data points are.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <button
                className="carousel-control-prev"
                type="button"
                onClick={goPrev}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                onClick={goNext}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="app-promo">
        <div className="container">
          <div className="col-md-8 col-lg-8 col-xl-8 col-sm-12 mx-auto">
            <div className="row">
              <div className=" col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <h3>Our wallet Application</h3>
                <p>
                  Attention in when in just something bread not hundred well,
                  muff value emerge on the known officers. A parameters phase
                  orthographic the can differentiates far catch he warned a they
                  but country. Times, cache in and what but the that go
                  facilitate far were house.
                </p>
              </div>
              <div className="col-md-5 col-lg-5 col-xl-5 offse-md-1 col-sm-12 offset-lg-1 offset-xl-1 position-relative sm-margin-phone">
                <div className="circle-animate"></div>
                <img
                  src="./images/phone.png"
                  className="img-fluid phone-placement"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Features.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Features;
