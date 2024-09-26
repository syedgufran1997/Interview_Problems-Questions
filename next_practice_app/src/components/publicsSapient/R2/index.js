// Core vanilla js Assessment

// Assessment 1
// Create a vanilla js application that consumes the https://swapi.dev/api/people/ API and displays a
// dropdown containing a list of Star Wars characters. When a user selects a character from the dropdown,
// the application should make an API call to fetch the films the character has appeared in and the vehicles
// they have used, and display them in a table. Once the details are fetched, they should be cached and the
// application should not make another API call for that Star Wars character again.

const url = "https://swapi.dev/api/people/";
async function fetchAPI(url) {
  try {
    const result = await fetch(url);
    const data = await result.json();
    showAPIData(data);
  } catch (error) {
    throw new Error(error);
  }
}

function showAPIData(data) {
  const Data = data.results;
  let films = [];
  let vehicles = [];
  console.log(Data);
  const selectField = document.getElementById("peopleNameDropdown");
  Data.forEach((item) => {
    const SelectInputOptions = document.createElement("option");
    const name = item.name;
    SelectInputOptions.value = name;
    SelectInputOptions.innerHTML = name;
    selectField.appendChild(SelectInputOptions);

    films = item.films;
    vehicles = item?.vehicles;
  });
}

// console.log('films', films)
// // const promise1 = fetchAPI(films)

// films.forEach(item => {
//   fetchAPI(item)
// })

// selectField.addEventListener('change', (event) => {
//   Promise.all( )
//   console.log(event);
// });

// const fetchAPIs = new Promise((resolve, reject) => {})

fetchAPI(url);
