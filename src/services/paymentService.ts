import axios from "axios";
const BASE_URL = "http://localhost:8080";

export function getAllPaymentsService() {
    return axios.get(`${BASE_URL}/payment/findall`);
}


export function savePaymentsService (payment:any) {
    return axios.post(`${BASE_URL}/payment`, payment);
}



export function updatePaymentsService (payment:any) {
    return axios.put(`${BASE_URL}/payment`, payment);
}




















