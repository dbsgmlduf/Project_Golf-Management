//action 정의
import axios from "axios";
import { LOGIN,REGISTER } from "./types";

axios.interceptors.request.use((config) => {
    config.headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };
    config.timeout = 2000;
    return config;
});

export function loginUser(data){
    const req = axios.post('http://localhost:7000/api/users/login', data)
    .then(res=>res.data);
    return{type :LOGIN, payload:req} 
}

export function register(data){
    const req = axios.post('http://localhost:7000/api/users/register', data)
    .then(res=>res.data);
    return{type :REGISTER, payload:req}
}
