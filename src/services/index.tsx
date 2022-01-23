import axios from "axios";

const api = axios.create({
    baseURL: 'https://sistemadeagendamento-san5v.ondigitalocean.app/'
});

export default axios;