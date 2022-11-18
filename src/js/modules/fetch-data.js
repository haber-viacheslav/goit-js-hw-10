function fetchSearchedCountry(searchValue) {
  return fetch(`https://restcountries.com/v3.1/name/${searchValue}`).then(
    response => {
      return response.json();
    }
  );
}
