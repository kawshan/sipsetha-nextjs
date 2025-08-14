import axios from "axios";
const BASE_URL = "http://localhost:8080";

export function getAllPaymentsService() {
    return axios.get(`${BASE_URL}/payment/findall`);
}



























