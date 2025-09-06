import axios from "axios";
const baseURL : string = "http://localhost:8080";

export function getAllClassTypeService() {
    return axios.get(`${baseURL}/classtype/findall`)
}



