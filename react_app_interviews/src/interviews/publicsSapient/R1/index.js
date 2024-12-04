// import "./styles.css";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(true);

//   const fetchApi = async () => {
//     try {
//       const result = await axios.get(url);
//       if (result.data) {
//         setData(result?.data?.results);
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   return { data, loading, error };
// };

// export default function App() {
//   const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
//   const { data, loading, error } = useFetch(url);

//   return (
//     <div className="App">
//       <h1>Pokemon</h1>

//       <div className="mainWrap">
//         {data
//           ? data?.map((item, index) => (
//               <div className="pokemonWrap">
//                 <p key={index}>{item?.name}</p>
//               </div>
//             ))
//           : ""}
//       </div>

//       {loading && <p>Loading...</p>}
//       {error && error}
//     </div>
//   );
// }

import React, { useState, memo, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const data = useMemo(() => {
    return [];
  }, []);
  function onIncrement() {
    setCount((count) => count + 1);
  }
  function onDecrement() {
    setCount((count) => count - 1);
  }
  return (
    <div className="App">
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={onIncrement}>Increment</button>
        <p>{count}</p>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      <SomeComponent data={data} />
    </div>
  );
}
const SomeComponent = memo(function Chart() {
  console.log("Chart component re-rendered");
  return <div>Chart</div>;
});

// const { name } = useSelector(state => state.user)
// const name = useSelector(state => state.user.name)
