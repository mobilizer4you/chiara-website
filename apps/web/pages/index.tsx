import Link from "next/link";
import { Button } from "ui";
import { useRouter } from "next/router";

import { useGetBooksQueryQuery } from "../generated/graphql";
import { loadClient } from "../utils/utils";
import Script from "next/script";
import MoonSvg from "../public/images/moon-bg.svg";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import { clientLogout } from "../utils/firebase";

import React from "react";
import HomePageLayout from "../components/Layout/HomePageLayout";

const Web = () => {
  const client = loadClient({});
  const { data } = useGetBooksQueryQuery(client);
  const { email, displayName } = useAuthUser();
  const router = useRouter();
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const script = document.createElement("script");
    script.src = "/js/animationScript.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [router]);
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

      {/* <Script id="show-banner" strategy="lazyOnload">
        {`${script}`}
      </Script> */}

      <header>
        <div className="container">
          {/* <div className="moon" id="moon-trigger"></div> */}
          <div className="shape" id="moon"></div>

          <h1 className="big-title">
            Made for people like you,
            <br />
            By People like you.
          </h1>
          <p className="sub-title">
            We&apos;re kind of like the cheat sheet you hid from teachers…{" "}
            <br />
            but for trading.
          </p>
        </div>
      </header>
      <section className="box-section1">
        <div className="container">
          <div
            className="shape shape-lg"
            style={{
              top: "5%",
              background: "transparent",
            }}
            id="anim-position-1"
          ></div>
          <div className="row">
            <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12">
              <div className="content-1 text-center">
                <h3>
                  Insightful,
                  <br />
                  uncomplicated <br />
                  and user friendly
                </h3>
                <p>
                  TikStock was created to take the confusion out of trading. To
                  deliver insightful market information to traders and investors
                  in
                </p>
                <button className="btn-theme center">
                  Get Started
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8299 11.7899L10.5899 7.54995C10.497 7.45622 10.3864 7.38183 10.2645 7.33106C10.1427 7.28029 10.012 7.25415 9.87994 7.25415C9.74793 7.25415 9.61723 7.28029 9.49537 7.33106C9.37351 7.38183 9.26291 7.45622 9.16994 7.54995C8.98369 7.73731 8.87915 7.99076 8.87915 8.25495C8.87915 8.51913 8.98369 8.77259 9.16994 8.95995L12.7099 12.4999L9.16994 16.0399C8.98369 16.2273 8.87915 16.4808 8.87915 16.7449C8.87915 17.0091 8.98369 17.2626 9.16994 17.4499C9.26338 17.5426 9.3742 17.616 9.49604 17.6657C9.61787 17.7155 9.74834 17.7407 9.87994 17.7399C10.0115 17.7407 10.142 17.7155 10.2638 17.6657C10.3857 17.616 10.4965 17.5426 10.5899 17.4499L14.8299 13.2099C14.9237 13.117 14.9981 13.0064 15.0488 12.8845C15.0996 12.7627 15.1257 12.632 15.1257 12.4999C15.1257 12.3679 15.0996 12.2372 15.0488 12.1154C14.9981 11.9935 14.9237 11.8829 14.8299 11.7899Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-lg-12 col-sm-12 offse-md-1  offset-xl-1 offset-lg-1">
              <div className="gradient-box"></div>
              <div className="decor-graph">
                <img src="./images/design-graph.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="animate-container">
        <div className="floating1"></div>
        <div className="floating2"></div>
      </section>
      <section className="box-section2">
        <div className="container">
          <div
            className="shape shape-lg"
            style={{
              top: "5%",
              left: "60%",
              background: "transparent",
            }}
            id="anim-position-2"
          ></div>
          <div className="row">
            <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12">
              <img src="./images/image1.png" className="img-fluid" alt="" />
            </div>
            <div className="col-xl-6 col-md-6 col-lg-6">
              <div className="content-2-right text-center">
                <h3>
                  Affordable for traders <br />
                  at any skill level
                </h3>
                <p>
                  Learning how to read a stocks chart, or getting help
                  determining your ideal stop-loss doesn’t have to be
                  expensive.Unlike most investment platforms out there, we know
                  that you work hard for your money and refuse to disrespect
                </p>
                <button className="btn-theme center">
                  TRY IT FOR FREE
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8299 11.7899L10.5899 7.54995C10.497 7.45622 10.3864 7.38183 10.2645 7.33106C10.1427 7.28029 10.012 7.25415 9.87994 7.25415C9.74793 7.25415 9.61723 7.28029 9.49537 7.33106C9.37351 7.38183 9.26291 7.45622 9.16994 7.54995C8.98369 7.73731 8.87915 7.99076 8.87915 8.25495C8.87915 8.51913 8.98369 8.77259 9.16994 8.95995L12.7099 12.4999L9.16994 16.0399C8.98369 16.2273 8.87915 16.4808 8.87915 16.7449C8.87915 17.0091 8.98369 17.2626 9.16994 17.4499C9.26338 17.5426 9.3742 17.616 9.49604 17.6657C9.61787 17.7155 9.74834 17.7407 9.87994 17.7399C10.0115 17.7407 10.142 17.7155 10.2638 17.6657C10.3857 17.616 10.4965 17.5426 10.5899 17.4499L14.8299 13.2099C14.9237 13.117 14.9981 13.0064 15.0488 12.8845C15.0996 12.7627 15.1257 12.632 15.1257 12.4999C15.1257 12.3679 15.0996 12.2372 15.0488 12.1154C14.9981 11.9935 14.9237 11.8829 14.8299 11.7899Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="box-section3">
        <div className="container">
          <div
            className="shape shape-lg"
            style={{
              top: "5%",
              left: "35%",
              background: "transparent",
            }}
            id="anim-position-3"
          ></div>
          <div className="row">
            <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12">
              <div className="content-2-right text-center">
                <h3>
                  Top market analytics from <br /> worlds fintech Leaders
                </h3>
                <p>
                  Learning how to read a stocks chart, or getting help
                  determining your ideal stop-loss doesn’t have to be
                  expensive.Unlike most investment platforms out there, we know
                  that you work hard for your money and refuse to disrespect
                </p>
                <button className="btn-theme center">
                  Get Started
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8299 11.7899L10.5899 7.54995C10.497 7.45622 10.3864 7.38183 10.2645 7.33106C10.1427 7.28029 10.012 7.25415 9.87994 7.25415C9.74793 7.25415 9.61723 7.28029 9.49537 7.33106C9.37351 7.38183 9.26291 7.45622 9.16994 7.54995C8.98369 7.73731 8.87915 7.99076 8.87915 8.25495C8.87915 8.51913 8.98369 8.77259 9.16994 8.95995L12.7099 12.4999L9.16994 16.0399C8.98369 16.2273 8.87915 16.4808 8.87915 16.7449C8.87915 17.0091 8.98369 17.2626 9.16994 17.4499C9.26338 17.5426 9.3742 17.616 9.49604 17.6657C9.61787 17.7155 9.74834 17.7407 9.87994 17.7399C10.0115 17.7407 10.142 17.7155 10.2638 17.6657C10.3857 17.616 10.4965 17.5426 10.5899 17.4499L14.8299 13.2099C14.9237 13.117 14.9981 13.0064 15.0488 12.8845C15.0996 12.7627 15.1257 12.632 15.1257 12.4999C15.1257 12.3679 15.0996 12.2372 15.0488 12.1154C14.9981 11.9935 14.9237 11.8829 14.8299 11.7899Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12">
              <img src="./images/image2.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="box-section4">
        <div className="container text-center">
          <div
            className="shape shape-lg"
            style={{
              top: "5%",
              left: "20%",
              background: "transparent",
            }}
            id="anim-position-4"
          ></div>
          <h3>Test Drive ourBuzz Portal</h3>
          <p>
            The bigger our community, the louder your voice will be <br /> heard
            on Wall Street! Help spread the word!
          </p>
          <div className="row flex-column">
            <div className="mx-auto col-md-8 col-xl-8 col-lg-8">
              <img src="./images/video.png" className="img-fluid" alt="" />
              <button className="btn-theme center explore mt-5">
                Explore more features
              </button>
            </div>
            <div
              className="shape shape-lg"
              style={{
                top: "80%",
                left: "60%",
                background: "transparent",
              }}
              id="anim-position-5"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

// // Note that this is a higher-order function.
// export const getServerSideProps = withAuthUserTokenSSR()();

// export default withAuthUser()(Web);

Web.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Web;
