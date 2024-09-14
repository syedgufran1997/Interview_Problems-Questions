"use client";
import React, { useState, useTransition } from "react";

const ComponentTranitionHook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 20000 }, (_, i) => `Item ${i + 1}`);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    startTransition(() => {
      const result = items?.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(result);
    });
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search items"
        className="border p-3"
      />

      {isPending ? <p>Loading...</p> : null}

      <ul>
        {filteredItems?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ComponentTranitionHook;
