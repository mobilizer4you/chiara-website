import Image from "next/image";
import React from "react";

const NewsLetterCard = () => {
  return (
    <div className="col-md-3 col-lg-3 col-xl-3">
      <div className="card-news">
        <div className="card-img">
          <Image
            src="/images/newsCard.jpg"
            layout="fill"
            objectFit="cover"
            alt="a mountain with sky as backdrop"
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">Daily ETF Market Report</h4>
          <a href="#">See an Example</a>
          <button className="subscribe-news">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterCard;
