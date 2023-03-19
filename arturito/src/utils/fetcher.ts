import axios from 'axios';

// Possible alternative: 'https://swapi.dev/api'
<<<<<<< HEAD
const baseURL = 'https://swapi.dev/api';
=======
const baseURL = 'https://swapi.dev/api'
>>>>>>> 5d2c0e218f36665ce6ea5c25b8e58ffd0265c1f7

export const swGet = (url: string) =>
  axios.get(url, { baseURL }).then((res) => res.data);


  // 'https://www.swapi.it/api';