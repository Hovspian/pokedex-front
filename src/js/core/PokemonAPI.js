const baseURL = 'https://pokedex-backend-server.herokuapp.com';

export const getRangeOfPokemon = (id, range) =>
  fetch(`${baseURL}/pokemon?id=${id}&range=${range}`)
    .then(res => res.json())
    .then(json => json.pokemon);

export const getPokemonDetails = (id) =>
  fetch(`${baseURL}/pokemon/${id}`)
    .then(res => res.json());

export const getPokemonSprite = (image_path) => baseURL + image_path;
