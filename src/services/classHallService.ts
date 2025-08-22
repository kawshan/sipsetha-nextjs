import axios from 'axios';
const baseUrl : string = 'http://localhost:8080';

export function getAllClassHallService(){
    return axios.get(`${baseUrl}/classhall/findall`)
}

export function saveClassHallService(classHallService:any){
    return axios.post(`${baseUrl}/classhall`, classHallService);
}

export function updateClassHallService(classHallService:any){
    return axios.put(`${baseUrl}/classhall`, classHallService);
}


export function deleteClassHallService(classHallService:any){
    return axios.delete(`${baseUrl}/classhall`,{data:classHallService});
}



