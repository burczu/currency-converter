import { ACCESS_KEY } from './api.key.js';

const mainUrl = 'http://data.fixer.io/api/';
const symbolsApiUrl = `${mainUrl}symbols?access_key=${ACCESS_KEY}`;

export {
  symbolsApiUrl
};
