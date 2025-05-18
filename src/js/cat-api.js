import axios from 'axios';

export function fetchBreeds() {
  axios.defaults.headers.common['x-api-key'] =
    'live_757P5Tbc2KDNWZxWyBNUFmFfEn6ZiOrkR2q3PuRwoqPQzxZ2kZ8Mw5IcrhHolXFC';
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

export function fetchCatByBreed(breedId) {
  axios.defaults.headers.common['x-api-key'] =
    'live_757P5Tbc2KDNWZxWyBNUFmFfEn6ZiOrkR2q3PuRwoqPQzxZ2kZ8Mw5IcrhHolXFC';
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
}
