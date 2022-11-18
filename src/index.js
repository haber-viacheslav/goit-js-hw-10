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

    // refs.countriesList.innerHTML = murkup;
  });
}

function fetchSearchedCountry(searchValue) {
  return fetch(`https://restcountries.com/v3.1/name/${searchValue}`).then(
    response => {
      return response.json();
    }
  );
}
