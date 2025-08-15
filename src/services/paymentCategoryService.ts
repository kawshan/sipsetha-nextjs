import axios from "axios";
const baseURL : string = "http://localhost:8080";


export function getAllPaymentCategoryService() {
    return axios.get(`${baseURL}/paymentcategory/findall`)
}