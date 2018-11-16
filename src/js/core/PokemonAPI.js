const baseURL = 'https://pokedex-backend-server.herokuapp.com';

export const getRangeOfPokemon = (searchOptions) => {
  let url = baseURL + '/pokemon';
  url += Object.keys(searchOptions).map((key, index) => {
    if (index === 0) {
      return `?${key}=${searchOptions[key]}`
    } else {
      return `&${key}=${searchOptions[key]}`
    }
  }).join('');

  return fetch(url)
    .then(handleResponse)
    .then(json => json.pokemon);
};

export const getPokemonDetails = (id) =>
  fetch(`${baseURL}/pokemon/${id}`)
    .then(handleResponse);

export const getPokemonSprite = (image_path) => baseURL + image_path;

const handleResponse = (response) => {
  return response.json()
    .then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    });
};