import axios from "axios";

const postOrders = (orderConfirmed) => {

    axios.post('https://6377a4945c47776512238f30.mockapi.io/api/orders', orderConfirmed)
        .then(response => {
            console.log('post success', response)
        })
        .catch(error => {
            console.log('Error', error)
        })
};

export default postOrders;
