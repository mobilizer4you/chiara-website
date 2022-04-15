import { useRouter } from "next/router";

import { useGetBooksQueryQuery } from "../generated/graphql";
import { loadClient } from "../utils/utils";
import Script from "next/script";
import { useAuthUser } from "next-firebase-auth";

import React from "react";
import HomePageLayout from "../components/Layout/HomePageLayout";
import RightChevronIcon from "../public/svg/rightChevron.svg";

const Web = () => {
  const client = loadClient({});
  useGetBooksQueryQuery(client, null, {
    onSuccess: (data) => {
      console.info("Successfully fetched books", data);
      console.log(
        "🚀 ~ file: index.tsx ~ line 64 ~ useGetBooksQueryQuery ~ data",
        data
      );
    },
  });
  // const router = useRouter();
  // React.useEffect(() => {
  //   if (typeof window === "undefined") return;
  //   const script = document.createElement("script");
  //   script.src = "/js/animationScript.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <>
      {/* <Script
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
      ></Script> */}

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
            We&apos;re kind of like the cheat sheet you hide from teachers…{" "}
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
                  in creative ways that anyone can understand.
                </p>
                <button className="btn-theme center">
                  Get Started
                  <RightChevronIcon />
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
                  Learning how to read stock charts, or getting help determining
                  your ideal stop-loss doesn’t have to be expensive. Unlike most
                  investment platforms out there, we know that you work hard for
                  your money and refuse to disrespect that.
                </p>
                <button className="btn-theme center">
                  TRY IT FOR FREE
                  <RightChevronIcon />
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
                  Top market analytics from <br /> world&apos;s fintech Leaders
                </h3>
                <p>
                  That sounds complicated, but all it means is that we take data
                  from really smart people who know their stuff about the market
                  (the class nerds), and bring it to you!
                </p>
                <button className="btn-theme center">
                  Get Started
                  <RightChevronIcon />
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
      <section className="rocket-launch">
        <div className="cloud-area">
          <svg
            width="500"
            height="421"
            viewBox="0 0 500 421"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="cloud-fly-2"
              d="M133.639 377.136C131.763 377.136 129.987 377.496 128.275 378.008C126.119 373.844 122.999 370.268 119.211 367.56C117.731 351.628 104.339 339.152 88.0187 339.152C71.3147 339.152 57.6987 352.232 56.7667 368.708C43.6067 369.68 33.2227 380.64 33.2227 394.048C33.2227 408.096 44.6107 419.484 58.6587 419.484C66.8987 419.484 74.2027 415.548 78.8507 409.472C84.2347 416.44 92.6507 420.948 102.139 420.948C110.563 420.948 118.143 417.388 123.507 411.716C126.435 413.6 129.899 414.724 133.639 414.724C144.019 414.724 152.431 406.308 152.431 395.932C152.431 385.548 144.015 377.136 133.639 377.136V377.136Z"
              fill="url(#paint1_linear_459_239)"
            />
            <path
              className="cloud-fly-3"
              d="M476.752 323.848C474.188 323.848 471.764 324.356 469.464 325.12C464.144 318.228 456.316 313.324 447.292 311.724C438.052 292.456 418.148 279.088 395.012 279.088C371.924 279.088 352.056 292.4 342.792 311.6C340.968 311.32 339.108 311.132 337.2 311.132C317.396 311.132 301.344 326.884 301.344 346.316C301.344 365.748 317.396 381.5 337.2 381.5C343.724 381.5 349.82 379.764 355.088 376.78C365.468 386.524 379.512 392.544 395.012 392.544C408.652 392.544 421.164 387.88 431.052 380.128C434.184 381.004 437.476 381.504 440.892 381.504C452.572 381.504 462.916 376 469.46 367.52C471.76 368.284 474.184 368.792 476.748 368.792C489.396 368.792 499.648 358.732 499.648 346.324C499.648 333.908 489.396 323.848 476.752 323.848V323.848Z"
              fill="url(#paint2_linear_459_239)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_459_239"
                x1="126.576"
                y1="0"
                x2="126.576"
                y2="147.588"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ADD8FF" />
                <stop offset="1" stopColor="#D5ECF8" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_459_239"
                x1="92.8267"
                y1="339.152"
                x2="92.8267"
                y2="420.948"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ADBAFF" />
                <stop offset="1" stopColor="#9CEAEF" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_459_239"
                x1="400.496"
                y1="279.088"
                x2="400.496"
                y2="392.544"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ADE1FF" />
                <stop offset="1" stopColor="#D2E1F7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="rocket-shake">
            <svg
              width="245"
              height="484"
              viewBox="0 0 245 484"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120.114 343.824C99.4823 343.824 82.7583 358.516 82.7583 376.64C82.7583 378.132 82.9104 379.588 83.1304 381.028C83.1424 384.736 82.9424 388.408 81.3624 391.776C79.0104 396.788 73.9143 400.428 71.0663 405.236C67.5823 411.128 67.9303 418.636 71.9543 424.256C74.4503 427.74 78.1344 430.412 81.3024 433.444C84.4744 436.476 87.2623 440.192 87.2543 444.308C90.6743 439.784 91.5384 433.844 89.5264 428.712C88.1584 425.228 85.5543 421.452 87.4543 418.164C89.1703 415.196 94.0864 414.548 97.3544 416.224C100.626 417.904 102.394 421.22 103.058 424.496C104.99 434.028 99.1904 443.54 99.5184 453.216C99.9384 465.652 110.306 476.12 121.602 483.624C119.526 475.916 121.162 467.488 126.038 460.824C130.966 454.084 138.766 449.388 144.522 443.18C152.334 434.76 155.942 422.364 149.942 412.868C156.054 416.092 160.63 421.492 162.386 427.564C168.614 412.808 168.606 395.5 164.534 380.172C162.122 371.092 154.058 361.088 151.59 358.984C151.574 358.968 151.558 358.96 151.542 358.944C144.902 349.864 133.322 343.824 120.114 343.824V343.824Z"
                fill="#FFCC5C"
              />
              <path
                d="M140.878 374.584C141.322 370.624 140.546 366.64 139.666 362.744C138.39 357.096 136.538 350.992 131.494 347.708C125.714 343.944 117.37 345.4 111.978 349.648C105.478 354.768 102.598 363.216 103.194 371.18C103.79 379.144 107.494 386.66 112.286 393.244C116.49 399.024 121.822 404.976 121.354 411.968C129.014 403.052 134.994 392.86 138.934 382.008C139.814 379.588 140.594 377.12 140.878 374.584V374.584Z"
                fill="#7C9EF3"
              />
              <path
                d="M167.374 270.352V319.86C167.374 333.044 156.586 343.828 143.406 343.828H101.398C88.2137 343.828 77.4297 333.04 77.4297 319.86V270.352C77.4297 257.168 88.2177 246.384 101.398 246.384H143.406C156.586 246.38 167.374 257.168 167.374 270.352Z"
                fill="#825E3B"
              />
              <path
                d="M182.478 96.0558V300.46C182.478 310.444 170.65 318.608 156.19 318.608H88.7138C74.2578 318.608 62.4258 310.44 62.4258 300.46V96.0558C62.4258 73.2598 89.4378 0.36377 122.45 0.36377C155.466 0.36377 182.478 73.2598 182.478 96.0558V96.0558Z"
                fill="#D5ECF3"
              />
              <path
                d="M62.4766 94.6398H182.429C181.409 70.4238 154.825 0.36377 122.453 0.36377C90.0806 0.36377 63.4966 70.4238 62.4766 94.6398Z"
                fill="#7C9EF3"
              />
              <path
                d="M0.144531 332.984V243.424C0.144531 238.116 3.56454 233.268 8.96854 230.916L62.4285 207.636V319.668C62.4285 324.976 59.0085 329.824 53.6045 332.176L23.0205 345.496C12.4885 350.076 0.144531 343.328 0.144531 332.984V332.984Z"
                fill="#7C9EF3"
              />
              <path
                d="M182.477 319.664V207.632L235.937 230.912C241.341 233.264 244.761 238.112 244.761 243.42V332.98C244.761 343.328 232.421 350.076 221.885 345.488L191.301 332.168C185.897 329.82 182.477 324.972 182.477 319.664Z"
                fill="#7C9EF3"
              />
              <path
                d="M109.859 328.328V207.628H135.043V328.328H109.859Z"
                fill="#7C9EF3"
              />
              <path
                d="M109.859 343.636V234.756H135.043V343.64C135.043 350.164 129.755 355.456 123.227 355.456H121.675C115.147 355.452 109.859 350.164 109.859 343.636V343.636Z"
                fill="#E05858"
              />
              <path
                d="M182.475 300.46V228.288L135.043 207.632V318.612H156.191C170.647 318.612 182.475 310.444 182.475 300.46Z"
                fill="#91E0F1"
              />
              <path
                d="M197.325 243.42C197.325 238.112 193.905 233.264 188.501 230.912L182.477 228.288V300.46V319.664C182.477 324.972 185.897 329.82 191.297 332.172L197.069 334.684C197.149 334.112 197.321 333.576 197.321 332.98V243.42H197.325Z"
                fill="#E05858"
              />
              <path
                d="M122.064 182.876C143.372 182.876 160.644 165.603 160.644 144.296C160.644 122.989 143.372 105.716 122.064 105.716C100.757 105.716 83.4844 122.989 83.4844 144.296C83.4844 165.603 100.757 182.876 122.064 182.876Z"
                fill="#7C9EF3"
              />
              <path
                d="M122.064 169.848C136.176 169.848 147.616 158.408 147.616 144.296C147.616 130.184 136.176 118.744 122.064 118.744C107.952 118.744 96.5117 130.184 96.5117 144.296C96.5117 158.408 107.952 169.848 122.064 169.848Z"
                fill="#825E3B"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

// // Note that this is a higher-order function.

Web.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Web;
