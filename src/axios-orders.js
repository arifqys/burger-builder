import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://learn-1f6d5.firebaseio.com/'
});

export default instance;