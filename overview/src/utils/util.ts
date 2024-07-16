import { ICustomer } from "../models/ICustomer";

export const storeCustomer = (customer: ICustomer) => {
    const stCustomer = JSON.stringify(customer)
    localStorage.setItem('customer', stCustomer)
}


export const getCustomer = () => {
    const stCustomer = localStorage.getItem('customer')
    if (stCustomer) {
        const customer = JSON.parse(stCustomer) as ICustomer
        return customer
    }
    return null
}