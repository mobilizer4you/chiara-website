import React from "react";
import clsx from "clsx";

interface Props {
  type: "positive" | "negative";
}

const StrategyCard = ({ type }: Props) => {
  const className = clsx(
    "value",
    type === "positive" ? "positive" : "negative"
  );
  return (
    <div className="col-md-6 col-lg-6 col-xl-6">
      <div className="strategy-card">
        <h5>Small Cap Price Trenders with Substancial</h5>
        <label htmlFor="">Matches</label>
        <strong className="value">7</strong>
        <label htmlFor="">Annualized Return</label>
        <strong className={className}>34.7%</strong>
      </div>
    </div>
  );
};

export default StrategyCard;
