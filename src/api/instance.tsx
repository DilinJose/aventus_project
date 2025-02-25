import axios from "axios";

const token = localStorage.getItem('token');

export const instance = axios.create({
    baseURL: 'https://react-test.aventusinformatics.com/api',
    // timeout: 1000,
    headers: { 'Authorization': token }
});