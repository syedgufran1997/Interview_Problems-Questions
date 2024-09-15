"use client";
import React from "react";

const CardComponent = ({ data, key }) => {
  return (
    <div className="cardWrap" key={key}>
      <div className="imageWrap">
        <img
          src={data?.image}
          alt={data?.titile}
          height="150px"
          width="100px"
        />
      </div>

      <div className="cardContent">
        <p>Title: {data?.title}</p>
        <p>Rate: {data?.rating?.rate}</p>
        <p>count: {data?.rating?.count}</p>
      </div>
    </div>
  );
};

export default CardComponent;
