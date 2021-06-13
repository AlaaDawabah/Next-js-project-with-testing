import axios from "axios";

export const getUsersList = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}
export const getUserDetails = (payload) => {
    console.log("payload",payload)
    return axios.get(`https://jsonplaceholder.typicode.com/users/${payload.id}`)
}