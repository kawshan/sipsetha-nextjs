import axios from "axios";
const baseURL : string = "http://localhost:8080";


export function getAllAllocationTypeService() {
    return axios.get(`${baseURL}/allocationtype/findall`);
}







