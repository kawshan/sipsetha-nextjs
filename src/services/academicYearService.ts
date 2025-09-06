import axios from "axios";
const baseURL :string = "http://localhost:8080";



export function getAllAcademicYearService() {
    return axios.get(baseURL + "/academicyear/findall");
}