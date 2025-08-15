import axios from "axios";
const baseURL = "http://localhost:8080";


export function getAllPaymentTypeService () {
    return axios.get(`${baseURL}/paytype/findall`)
}



export function getStudentRegistrationListService (indexNumber:any) {
    return axios.get(`${baseURL}/studentregistration/${indexNumber}`)
}