function renderCountriesList(arr) {
  return arr
    .map(country => {
      return `
    <li>
      <img src="${country.flags.svg}" alt="${country.name}" width="80" height="60">
      <h2>${country.name.official}</h2>
    </li>`;
    })
    .join('');
}

function renderCountryCard(arr) {
  return arr
    .map(country => {
      return `
      <img src="${country.flags.svg}" alt="${
        country.name
      }" width="80" height="60">
      <h2 class='country-title'>${country.name.official}</h2>
      <p class='country-descr'>Capital:<span> ${country.capital}</span></p>
      <p class='country-descr'>Polulation:<span> ${
        country.population
      }</span></p>
      <p class='country-descr'>Languages:<span> ${Object.values(
        country.languages
      )}</span></p>`;
    })
    .join('');
}
export { renderCountriesList, renderCountryCard };
