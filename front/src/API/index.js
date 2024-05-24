import { BASE_URL } from "./base";
import axios from "axios"
export async function getAll(){
    try {
        const response = await axios.get(BASE_URL)
        return response
    } catch (error) {
        return error
    }
}

export async function getOne(id){
    try {
        const response = await axios.get(BASE_URL+`/${id}`)
        return response
    } catch (error) {
        return error
    }
}

export async function deleteOne(id){
    try {
        const response = await axios.delete(BASE_URL+`/${id}`)
        return response
    } catch (error) {
        return error
    }
}

export async function post(payload){
    try {
        const response = await axios.get(BASE_URL,payload)
        return response
    } catch (error) {
        return error
    }
}