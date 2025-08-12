import axios from "axios";
const baseURL : string = "http://localhost:8080";

export function getAllClassOfferingService() {
    return axios.get(`${baseURL}/classoffering/findall`);
}


