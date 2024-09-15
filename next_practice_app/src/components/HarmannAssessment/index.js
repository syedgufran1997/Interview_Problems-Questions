"use client";
import React, { useEffect, useState, createContext } from "react";
import "./styles.css";
import axios from "axios";
import CardComponent from "./card";

// L1 Interview Schedule - HARMANN Assessment
// Sun Sep 15, 2024 11am – 11:45am (IST)

// create reusable components show cards
// fetch api - titile, image adn rating in a card
// use context to pass data

export default function ProdcutsApi() {
  const [apiData, setApiData] = useState([]);
  const url = "https://fakestoreapi.com/PRODUCTS";

  const fetchAPI = () => {
    axios
      .get(url)
      .then((res) => setApiData(res?.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <h1>Prodcuts API </h1>

      <div className="mainCardWrap">
        {apiData &&
          apiData?.map((item, index) => (
            <CardComponent data={item} key={index} />
          ))}
      </div>
    </div>
  );
}
