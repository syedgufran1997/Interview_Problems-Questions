document.addEventListener("DOMContentLoaded", () => {
  async function fetchApi() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      displayApiData(data);
    } catch (error) {
      console.log("Error fetching the products", error);
    }
  }
  fetchApi();

  function displayApiData(data) {
    const Products = data.products;
    console.log(Products);
    const productList = document.getElementById("productList");

    Products?.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "productCard";
      productList.appendChild(productCard);

      const productImage = document.createElement("img");
      productImage.src = product.images[0];
      productImage.className = "productImage";
      productCard.appendChild(productImage);

      const heading = document.createElement("h3");
      heading.textContent = `${product.title}`;
      productCard.appendChild(heading);

      const description = document.createElement("p");
      description.textContent = product.description;
      productCard.appendChild(description);
    });
  }
});
