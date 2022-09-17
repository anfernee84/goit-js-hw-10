function renderOneCountry(countries) {
  return countries
    .map(({ flags, name, capital, population, languages }) => {
      return `
      <div class="country-list__item">
      <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${
        name.official
      }"><h2>${name.official}</h2></div>

      <div class="country-info-item">
      <p><b>Capital: </b>${capital}</p>
      </div>
      <div class="country-info-item">
      <p><b>Population: </b>${population}</p>
      </div>
      <div class="country-info-item">
      <p><b>Languages: </b>${Object.values(languages)}</p>
      </div>
      `;
    })
    .join('');
}

function renderSomeCountries(countries) {
  //   console.log(countries);
  // return countries.forEach(country =>
  //   console.log(country.name.official, country.flags[0])
  // );
  return countries
    .map(({ flags, name }) => {
      console.log(flags.svg, name.official);
      return `
          <div class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}">
              <h2 class="country-list__name">${name.official}</h2>
          </div>
          `;
    })
    .join('');
}

export { renderOneCountry, renderSomeCountries };
