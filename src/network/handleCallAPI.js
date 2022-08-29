import {Api} from './Api';

export const getData = callback => {
  fetch(Api.url)
    .then(response => response.json())
    .then(data => {
      callback(data);
    });
};
