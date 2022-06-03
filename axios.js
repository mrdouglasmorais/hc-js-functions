import axios from 'axios';

const response = await axios.get('https://api.github.com/users/github');
const data = await response;

console.log(data);