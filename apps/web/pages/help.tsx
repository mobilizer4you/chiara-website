import Image from "next/image";
import React from "react";
import HomePageLayout from "../components/Layout/HomePageLayout";
import Accordion from "react-bootstrap/Accordion";
import { useForm } from "react-hook-form";

type FormType = {
  name: string;
  email: string;
  message: string;
};

const Help = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <div>
      <header style={{ minHeight: "700px" }}>
        <div className="container">
          <div className="shape" id="moon"></div>
          <h1 className="big-title mb-5">Help Centre</h1>
          <div className="col-md-8 col-xl-8 col-lg-8 mx-auto">
            <p className="text-center">
              We are a User-Owned Financial Management Platform dedicated to
              giving power to the people through trading, crypto, banking, and
              alternative investments.
            </p>
          </div>
        </div>
      </header>
      <section className="animate-container">
        <div className="floating1"></div>
        <div className="floating2"></div>
      </section>
      <section className="help-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="help-block">
                <label htmlFor="">Billing</label>
                <div
                  className="position-relative"
                  style={{
                    width: "100%",
                    minHeight: "94px",
                  }}
                >
                  <Image
                    src="/images/billing.svg"
                    layout="fill"
                    alt="a bag with money symbol and gold bricks in front"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="help-block">
                <label htmlFor="">
                  Profile <br /> Settings
                </label>
                <div
                  className="position-relative"
                  style={{
                    width: "100%",
                    minHeight: "94px",
                  }}
                >
                  <Image src="/images/profile.svg" alt="" layout="fill" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="help-block">
                <label htmlFor="">
                  Mobile <br />
                  App
                </label>
                <div
                  className="position-relative"
                  style={{
                    width: "100%",
                    minHeight: "94px",
                  }}
                >
                  <Image src="/images/app.svg" alt="" layout="fill" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="help-block">
                <label htmlFor="">Alert</label>
                <div
                  className="position-relative"
                  style={{
                    width: "100%",
                    minHeight: "94px",
                  }}
                >
                  <Image src="/images/alert.svg" alt="" layout="fill" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="help-block">
                <label htmlFor="">FAQ</label>
                <div
                  className="position-relative"
                  style={{
                    width: "100%",
                    minHeight: "94px",
                  }}
                >
                  <Image src="/images/faq.svg" alt="" layout="fill" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="help-block">
                <label htmlFor="">Features</label>
                <div
                  className="position-relative"
                  style={{
                    width: "100%",
                    minHeight: "94px",
                  }}
                >
                  <Image src="/images/feature.svg" alt="" layout="fill" />
                </div>
              </div>
            </div>
          </div>
          <div className="row help-block-detail">
            <div className="col-md-8 col-lg-8 col-xl-8 mx-auto">
              <h3 className="text-center mb-3">FAQ</h3>
              <Accordion id="accordionExample">
                <Accordion.Item eventKey="0">
                  <Accordion.Header id="headingOne">
                    Do I need a credit card to subscribe to the LITE plan?
                  </Accordion.Header>
                  <Accordion.Body
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>
                        Nope! No credit card needed. Simply create a username
                        and password to access it free for 7 days.
                      </strong>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header id="headingTwo">
                    Will there be ads displayed on TikStock?
                  </Accordion.Header>
                  <Accordion.Body
                    id="collapseTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Absolutely not. No matter which plan you choose, we want
                      to make sure you enjoy your TikStock experience and stay
                      distraction-free.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header id="headingThree">
                    Can I cancel my subscription anytime?
                  </Accordion.Header>
                  <Accordion.Body
                    id="collapseThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes. Whether you paid monthly or yearly, if you decide to
                      cancel your subscription you will continue to have access
                      to TikStock for the remaining length of contracted time.
                      Please note that your subscription will automatically
                      renew at the beginning of each billing cycle.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header id="headingThree">
                    What devices can TikStock be accessed on?
                  </Accordion.Header>
                  <Accordion.Body
                    id="collapseThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      TikStock is available on desktop web, mobile app and
                      mobile web.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header id="headingFour">
                    Can I trade through TikStock?
                  </Accordion.Header>
                  <Accordion.Body
                    id="collapseFour"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Trading on TikStock is something we plan on growing into,
                      but for now you will find a “TRADE” button at the top
                      right corner of each page. When clicked on, you will be
                      automatically directed to your brokerage firm&apos;s trade
                      page.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header id="headingFive">
                    I don’t know much about trading, but I want to learn more.
                    Is TikStock the platform for me?
                  </Accordion.Header>
                  <Accordion.Body
                    id="collapseFive"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes! TikStock was made with users like you in mind. Some
                      of our favorite beginner features include educational
                      videos on how to read stock charts (technical analysis),
                      quizzes and detailed explanations of candlestick
                      formations.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header id="headingSix">
                    I’m an advanced trader. Is TikStock for me?
                  </Accordion.Header>
                  <Accordion.Body
                    id="collapseSix"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Also, yes! We’d like to think of ourselves as any traders
                      go-to support system before they make their trading or
                      investment decisions. Download backtested strategies, stay
                      in tune with macroeconomic data by examining historical
                      graphs and access personalized investment ideas.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header id="headingSeven">
                    Is there a live chat room for users to share ideas?
                  </Accordion.Header>
                  <Accordion.Body
                    id="collapseSeven"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      No. At TikStock, we feel as though it is easy to be
                      emotionally influenced to exit or enter a position because
                      of people who don’t know what they’re doing. Long-term
                      success is not acquired by involving crowds.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="row contact-block">
            <div className="col-md-8 col-lg-8 col-xl-8 mx-auto">
              <h3 className="text-center" style={{ lineHeight: "40px" }}>
                Can&apos;t find the answer to your question?
                <br />
                Fill out the contact form below and we&apos;ll get <br />
                back to you shortly.
              </h3>
              <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Your name</label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                  })}
                  id="name"
                  type="text"
                  className="form-control"
                />
                <label htmlFor="email">Email</label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email",
                    },
                  })}
                  id="email"
                  type="email"
                  className="form-control"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Please enter your message",
                    },
                  })}
                  id="message"
                  cols={30}
                  rows={10}
                  className="form-control"
                ></textarea>
                <button type="submit" className="btn-theme send-email">
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Help.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Help;
