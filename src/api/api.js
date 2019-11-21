import { create } from 'apisauce';

export const BASE_URL = "https://jsonplaceholder.typicode.com"
export const api = create({
    baseURL: BASE_URL,
})

export const getTodos = () => new Promise((resolve, reject) => {
    api.get('/todos')
        .then(response => resolve(response))
        .catch(error => reject(error))
})