import axios from 'axios';
const baseUrl : string = 'http://localhost:8080';

export function getAllClassHallStatusService(){
    return axios.get(`${baseUrl}/classhallstatus/findall`);
}






