import axios from 'axios';

export const client = axios.create({
    baseURL: "https://reqres.in/api/users?"
})

export interface ResponseAPI {
    id: number,
    email: string, 
    first_name: string,
    last_name: string,
    avatar: string,
}