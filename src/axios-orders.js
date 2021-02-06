import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-f064a-default-rtdb.firebaseio.com/',
});

export default instance;
