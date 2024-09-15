"use client";
import React, { useContext } from "react";
import MyContext from "./context";

const CardComponent = () => {
  const { data, error } = useContext(MyContext);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="mainCardWrap">
      {data?.data &&
        data.data.map((item, index) => (
          <div className="cardWrap" key={index}>
            <div className="imageWrap">
              <img
                src={item?.image}
                alt={item?.titile}
                height="150px"
                width="100px"
              />
            </div>

            <div className="cardContent">
              <p>Title: {item?.title}</p>
              <p>Rate: {item?.rating?.rate}</p>
              <p>count: {item?.rating?.count}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardComponent;
