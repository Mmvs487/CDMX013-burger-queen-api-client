import axios from "axios"

export const authOrdersInKitchen = () => {
    const orders = 'https://6377a4945c47776512238f30.mockapi.io/api/orders'
    return axios
        .get(orders)
        .then(response => response.data)
        .catch(err => console.log(err))
}