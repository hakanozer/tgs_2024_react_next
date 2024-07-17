import { useState } from "react";
import { ICustomer } from "../models/ICustomer";
import CryptoJS from 'crypto-js'

const key = process.env.REACT_APP_KEY ? process.env.REACT_APP_KEY : ''

export const storeCustomer = (customer: ICustomer) => {
    const stCustomer = JSON.stringify(customer)
    const encString = encrypt(stCustomer)
    localStorage.setItem('customer', encString)
}


export const getCustomer = () => {
    const stCustomer = localStorage.getItem('customer')
    if (stCustomer) {
        try {
            const plainText = decrypt(stCustomer)
            const customer = JSON.parse(plainText) as ICustomer
            return customer
        } catch (error) {
            localStorage.removeItem('customer')
        }
    }
    return null
}

export const useCall = () => {
    const [Search, setSearch] = useState('')
    return Search
}

export const encrypt = (plainText: string) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, key).toString()
    return cipherText
}

export const decrypt = (cipherText: string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, key)
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
}