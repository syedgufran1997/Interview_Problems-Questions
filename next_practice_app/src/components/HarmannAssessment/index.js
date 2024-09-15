"use client";
import React from "react";
import "./styles.css";
import CardComponent from "./card";
import { MyProvider } from "./context";

// L1 Interview Schedule - HARMANN Assessment
// Sun Sep 15, 2024 11am – 11:45am (IST)

// create reusable components show cards
// fetch api - titile, image adn rating in a card
// use context to fetch and pass data

export default function ProdcutsApi() {
  return (
    <MyProvider>
      <div className="App">
        <h1 className=" text-3xl font-semibold my-5 ">Prodcuts API</h1>
        <CardComponent />
      </div>
    </MyProvider>
  );
}
