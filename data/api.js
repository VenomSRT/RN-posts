const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export async function getData(url) {
  let response = await fetch(BASE_URL + url);
  let data = await response.json();
  return data;
}