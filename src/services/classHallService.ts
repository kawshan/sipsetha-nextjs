import axios from 'axios';
const baseUrl : string = 'http://localhost:8080';

export function getAllClassHallService(){
    return axios.get(`${baseUrl}/classhall/findall`)
}



