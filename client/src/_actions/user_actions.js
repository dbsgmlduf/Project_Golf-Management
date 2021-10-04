//action 정의
import axios from "axios";
import { LOGIN,REGISTER } from "./types";

export function loginUser(data){
    const req = axios.post('http://localhost:7000/auth/login', data)
    .then(res=>res.data);
    return{type :LOGIN, payload:req} 
}

export function register(data){
    const req = axios.post('http://localhost:7000/auth', data)
    .then(res=>res.data);
    return{type :REGISTER, payload:req}
}
