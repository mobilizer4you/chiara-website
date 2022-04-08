import Image from "next/image";
import React from "react";

const StrategyTheme = () => {
  return (
    <div className="col-md-4 col-lg-4 col-xl-4">
      <div className="position-relative img-fluid w-100">
        <Image
          src="/images/strategyTheme.jpg"
          layout="responsive"
          objectFit="cover"
          className="w-100"
          width={1000}
          height={600}
          alt=""
        />
      </div>
      <p>5G</p>
    </div>
  );
};

export default StrategyTheme;
