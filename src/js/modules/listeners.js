import { refs } from './refs';
import onSearch from './search-module';
import { DEBOUNCE_DELAY } from '../../index';
import debounce from 'lodash.debounce';
refs.searchForm.addEventListener('input', debounce(onSearch), DEBOUNCE_DELAY);
