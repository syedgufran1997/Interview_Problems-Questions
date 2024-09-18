"use client";
import { useEffect, useState, useTransition } from "react";
import "./App.css";

// Altemetric L2 Round

// Create a web application like flipkart using the below product api
// https://dummyjson.com/products

export default function Altemetric() {
  const [data, setData] = useState([]);
  const [state, setState] = useState("");
  const [isLoading, startTransition] = useTransition();

  const url = "https://dummyjson.com/products";
  const fetchApi = () => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response.products))
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const title = e.target.value;
    setState(title);

    startTransition(() => {
      if (title) {
        const filteredData = data.filter((item) => {
          return item?.title.toLowerCase().includes(title.toLowerCase());
        });
        setData(filteredData);
      }
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <p>Flipkart clone</p>

      <div className="inputWrap">
        <input
          className="inputComp"
          type="text"
          value={state}
          onChange={handleInputChange}
        />
      </div>

      {isLoading && <p>Loading....</p>}
      <div className="mainWrap">
        {data && data.length
          ? data?.map((item, index) => (
              <div key={index} className="cardWrap">
                <div>
                  <img
                    src={item?.images[0]}
                    alt={item?.title}
                    width="200px"
                    height="200px"
                  />
                </div>

                <p> Title: {item?.title}</p>
                <p> Description: {item?.description}</p>
                <p> Price {item?.price}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
