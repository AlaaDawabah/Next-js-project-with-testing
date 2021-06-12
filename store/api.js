import axios from "axios";

export const getUsersList = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users')
}