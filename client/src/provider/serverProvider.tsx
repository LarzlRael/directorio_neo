import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_URL;

export const serverAPI = axios.create({ baseURL });


// set the token if this exists

