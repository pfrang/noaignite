// TODO: Autocomplete the input with AJAX calls.

const url = "https://wagon-dictionary.herokuapp.com/autocomplete/";
const searchbar = document.getElementById("search");
const listResults = document.getElementById("results");

const unpackData = (data) => {
  console.log(data);
  data.words.forEach((word) => {
    listResults.insertAdjacentHTML("beforeend", `
    <li>${word}</li>`);
  });
};


const apiResponse = (str) => {
  fetch(url + str)
    .then(response => response.json())
    .then((data) => {
      unpackData(data);
    });
};

searchbar.addEventListener("keyup", (event) => {
  listResults.innerHTML = "";
  const newval = apiResponse(searchbar.value);
});
