import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/modules/fetch-data';
import {
  notifyInfoMessage,
  notifyFailureMessage,
} from './js/modules/notify-msg';
import {
  renderCountryCard,
  renderCountriesList,
} from './js/modules/render-module';
const DEBOUNCE_DELAY = 300;

const refs = {
  searchForm: document.querySelector('#search-box'),
  countriesList: document.querySelector('.country-list'),
  countryCard: document.querySelector('.country-info'),
};

refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const searchQuery = e.target.value.trim();
  console.log(searchQuery);

  if (!searchQuery) {
    return (refs.countriesList.innerHTML = '');
  }

  fetchCountries(searchQuery)
    .then(country => {
      if (country.length > 10) {
        refs.countriesList.innerHTML = '';
        return notifyInfoMessage();
      }
      if (country.length > 1 && country.length < 10) {
        refs.countriesList.innerHTML = renderCountriesList(country);
      } else {
        refs.countriesList.innerHTML = renderCountryCard(country);
      }
    })
    .catch(error => notifyFailureMessage());
}
