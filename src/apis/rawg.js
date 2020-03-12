import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  headers: {
    'User-Agent': 'DK React-learning Game Search'
  }
});
