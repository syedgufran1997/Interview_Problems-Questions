document.addEventListener("DOMContentLoaded", () => {
  function fetchApi() {
    const url = "https://dummyjson.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((res) => displayApiData(res))
      .catch((error) => {
        throw new Error(error.message);
      });
  }
  fetchApi();

  function displayApiData(data) {
    const products = data.products[0];
    console.log(products);
  }
});
