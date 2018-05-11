import { ACCESS_KEY } from './api.key.js';

const mainUrl = 'http://data.fixer.io/api';
const symbolsApiUrl = `${mainUrl}/symbols?access_key=${ACCESS_KEY}`;
const latestApiUrl = `${mainUrl}/latest?access_key=${ACCESS_KEY}`;
const getHistoryApiUrl = (date) => `${mainUrl}/${date}?access_key=${ACCESS_KEY}`;

export {
  symbolsApiUrl,
  latestApiUrl,
  getHistoryApiUrl
};
