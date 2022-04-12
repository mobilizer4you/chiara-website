import React from "react";
import Script from "next/script";

import HomePageLayout from "../components/Layout/HomePageLayout";

const About = () => {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const script = document.createElement("script");
    script.src = "/js/aboutAnimationScript.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.6.0.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"
      ></Script>
      <header>
        <div className="container">
          <div className="shape shape-new" id="moon"></div>
          <h1 className="big-title mb-5">Welcome</h1>
          <div className="col-md-8 col-xl-8 col-lg-8 mx-auto">
            <p className="text-center">
              TikStock&apos;s story began during lockdown, when the green
              portfolios of successful traders started turning red. Now unsure
              of which direction the market was headed, we were left with an
              unsettling feeling….
              <br />
              A feeling that made us question how many others were forced into
              the same dilemma. As many retail investors entered the market, our
              team here at TikStock dedicated themselves to the creation of this
              platform. A platform that allows users to gain key insights into
              their favorite stocks, cryptos, indexes and more.
              <br />
              Not only have we&apos;ve partnered with award winning fintech
              leaders to provide users with top market analytics, but we&apos;ve
              made it our focus to deliver this information to you with an
              attractive design at an affordable price.
            </p>
          </div>
        </div>
      </header>
      <section className="animate-container">
        <div className="floating1"></div>
        <div className="floating2"></div>
      </section>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-xl-8 col-sm-12 mx-auto">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 text-center height-adjust">
                  <div
                    className="shape shape-lg"
                    style={{
                      top: "5%",
                      background: "transparent",
                    }}
                    id="anim-position-1"
                  ></div>
                  <h3 className="about-heading">American Owned.</h3>
                  <p>
                    TikStock is a proud, American owned company founded with the
                    intention to provide stock information to traders and
                    investors in an understandable way.
                  </p>
                </div>
              </div>
              <div className="row d-flex  justify-content-end">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 text-center align-self-end height-adjust">
                  <div
                    className="shape shape-lg"
                    style={{
                      top: "5%",
                      left: "60%",
                      background: "transparent",
                    }}
                    id="anim-position-2"
                  ></div>
                  <h3 className="about-heading">
                    We are traders Just <br /> Like you
                  </h3>
                  <p>
                    As traders ourselves who studied books, watched videos and
                    took expensive online courses in attempts to learn the
                    secrets to market conquering, we took to the interne to find
                    an affordable and comprehensive alternative. A platform
                    where beginners can go to dive deep without feeling
                    overwhelmed. We failed.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 text-center height-adjust">
                  <div
                    className="shape shape-lg"
                    style={{
                      top: "5%",
                      left: "35%",
                      background: "transparent",
                    }}
                    id="anim-position-3"
                  ></div>
                  <h3 className="about-heading">TikStock&apos;s Creation.</h3>
                  <p>
                    That&apos;s when we decided to take matters into our own
                    hands and create one for you. Our mission here at TikStock
                    is to make sure you&apos;re having fun while learning. To
                    make sure you have a platform that doesn&apos;t ruin you
                    motivation or confidence through information overload, but
                    boosts it through user-friendly interfaces and simplistic
                    versatility.
                  </p>
                </div>
              </div>
              <div className="row d-flex  justify-content-end mb-5">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 text-center align-self-end height-adjust">
                  <div
                    className="shape shape-lg"
                    style={{
                      top: "5%",
                      left: "20%",
                      background: "transparent",
                    }}
                    id="anim-position-4"
                  ></div>
                  <h3 className="about-heading">Let us know</h3>
                  <p>
                    So, if for some reason we have failed at doing this, fill
                    out the contact form found at the Help Center and let us
                    know how we can improve. We made TikStock with you in mind
                    and want to make sure you achieve your financial goals.
                  </p>
                </div>
              </div>
              <div className="row" id="anim-position-5">
                <h1 className="text-center mt-5 mb-5">
                  {/* Thank you for your support */}
                  <button>Subscribe</button>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default About;
