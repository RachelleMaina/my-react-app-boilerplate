import axios from 'axios';

const baseURL = '//numbersapi.com/';

const server = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = {
  list: (month, day) => server.get(`${month}/${day}/date`),
};
