import './css/styles.css';
// import './js/modules/search-module';
// import './js/modules/render-module';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchForm: document.querySelector('#search-box'),
  countriesList: document.querySelector('.country-list'),
  countryCard: document.querySelector('.country-info'),
};

refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const searchQuery = e.target.value;

  if (!searchQuery) {
    return;
  }
  fetchSearchedCountry(searchQuery).then(country => {
    console.log(country);
    console.log(country[1].languages);

    refs.countriesList.innerHTML = renderCountriesList(country);
  });
}

function fetchSearchedCountry(searchValue) {
  return fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}

//{flags.svg, name.official, capital, population, languages}
function renderCountriesList(countries) {
  return countries
    .map(country => {
      return `<svg width='30' height='30'>
    <use href='${country.flags.svg}'></use>
    </svg>
    <h2 class='country-title'>${country.name.official}</h2>
    <p class='country-descr'>Capital:<span> ${country.capital}</span></p>
    <p class='country-descr'>Polulation:<span> ${country.population}</span></p>
    <p class='country-descr'>Languages:<span> ${country.languages}</span></p>`;
    })
    .join('');
}

function renderCountryCard() {}
