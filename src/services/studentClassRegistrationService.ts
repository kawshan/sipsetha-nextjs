import axios from "axios";
const baseURL : string = "http://localhost:8080";

export const getAllStudentClassRegistrationService = () => {
    return axios.get(`${baseURL}/studentregistration/findall`);
}




















