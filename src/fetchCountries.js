function fetchCountries(address, nameCountry, params) {
  const url = `${address}${nameCountry}${params}`;
  console.log(url);
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
export { fetchCountries };
