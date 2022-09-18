import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { renderOneCountry, renderSomeCountries } from './renderFunctions';
const urlAddress = 'https://restcountries.com/v3.1/name/';
const args = `?fields=name,capital,population,flags,languages`;
const DEBOUNCE_DELAY = 500;
const MAX_LENGTH = 10;
let countryList = document.querySelector('.country-list');
let oneCountry = document.querySelector('.country-info');

document
  .getElementById('search-box')
  .addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(e) {
  if (e.target.value.trim() === '')
    return (countryList.innerHTML = ''), (oneCountry.innerHTML = '');
  else {
    fetchCountries(urlAddress, e.target.value.trim(), args)
      .then(renderCountry)
      .catch(err => {
        Notiflix.Notify.failure(
          'Oops, there is no country with that name',
          err
        );
      });
  }
}

function renderCountry(countries) {
  countryList.innerHTML = '';
  oneCountry.innerHTML = '';
  if (countries.length > MAX_LENGTH) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (countries.length < MAX_LENGTH && countries.length > 2) {
    countryList.insertAdjacentHTML('beforeend', renderSomeCountries(countries));
    console.log(countryList);
  } else if (countries.length == 1) {
    oneCountry.insertAdjacentHTML('beforeend', renderOneCountry(countries));
    console.log(oneCountry);
  }
}
