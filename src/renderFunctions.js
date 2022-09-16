function renderOneCountry(countries) {
  return countries
    .map(({ flags, name, capital, population, languages }) => {
      return `
    <img width="50px" height="50px" src='${flags.svg}' 
    alt='${name.official} flag' />
      <ul class="country-info__list">
          <li class="country-info__item"><p><b>Name: </b>${
            name.official
          }</p></li>
          <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
          <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
          <li class="country-info__item"><p><b>Languages: </b>${Object.values(
            languages
          )}</p></li>
      </ul>
      `;
    })
    .join('');
}

function renderSomeCountries(countries) {
  return countries
    .map(({ flags, name }) => {
      console.log(flags.svg, name.official);
      return `
          <li class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 50px height = 50px>
              <h2 class="country-list__name">${name.official}</h2>
          </li>
          `;
    })
    .join('');
}

export { renderOneCountry, renderSomeCountries };
