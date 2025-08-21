import axios from "axios";
const baseURL = "http://localhost:8080";


export function getAllAttendanceServices() {
    return axios.get(`${baseURL}/attendance/findall`)
}


export function saveAttendanceService(attendance: any) {
    return axios.post(`${baseURL}/attendance`, attendance)
}

export function deleteAttendanceService(attendance: any) {
    return axios.delete(`${baseURL}/attendance`,{data:attendance})
}


export function updateAttendanceService(attendance: any) {
    return axios.put(`${baseURL}/attendance`, attendance)
}


