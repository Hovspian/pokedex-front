const baseURL = 'https://pokedex-backend-server.herokuapp.com';

export const getRangeOfPokemon = (id, range) =>
  fetch(`${baseURL}/pokemon?id=${id}&range=${range}`)
    .then(handleResponse)
    .then(json => json.pokemon);

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