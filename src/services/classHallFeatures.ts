import axios from "axios";
const baseURL = "http://localhost:8080";


export function getAllClassHallFeaturesService() {
    return axios.get(`${baseURL}/classhallfeatures/findall`);
}



