import axios from "axios";
const baseURL : string = "http://localhost:8080";

export function getAllRegisteredTypeService() {
    return axios.get(`${baseURL}/registeredtype/findall`);
}