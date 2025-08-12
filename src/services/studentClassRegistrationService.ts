import axios from "axios";
const baseURL : string = "http://localhost:8080";

export const getAllStudentClassRegistrationService = () => {
    return axios.get(`${baseURL}/studentregistration/findall`);
}


export function deleteStudentRegistrationService(registration:any){
    return axios.delete(`${baseURL}/studentregistration`,{data:registration});
}


export function updateStudentRegistrationService(registration:any):any{
    return axios.put(`${baseURL}/studentregistration`, registration);
}


export function saveStudentRegistrationService(registration:any):any{
    return axios.post(`${baseURL}/studentregistration`, registration);
}















