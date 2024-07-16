import { useState } from "react";
import { ICustomer } from "../models/ICustomer";

export const storeCustomer = (customer: ICustomer) => {
    const stCustomer = JSON.stringify(customer)
    localStorage.setItem('customer', stCustomer)
}


export const getCustomer = () => {
    const stCustomer = localStorage.getItem('customer')
    if (stCustomer) {
        try {
            const customer = JSON.parse(stCustomer) as ICustomer
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