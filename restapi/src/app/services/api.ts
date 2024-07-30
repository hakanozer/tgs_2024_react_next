import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/"
export const configApi = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    //data: {ip: "192.168.0.1", device: "mac"},
    //headers: {token: "12345678ıukıyuıyusfsd"},
    //auth: {username: "", password: ""}
})

