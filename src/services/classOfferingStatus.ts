import axios from "axios";
const baseURL : string = "http://localhost:8080";

export function getAllClassOfferingStatusService() {
    return axios.get(baseURL + "/classofferingstatus/findall");
}


