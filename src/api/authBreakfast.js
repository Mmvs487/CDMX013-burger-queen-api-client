import axios from "axios";

export const authBreakfast = () => {
    const menu = 'https://6377a4945c47776512238f30.mockapi.io/api/menu'
         return axios
            .get(menu)
            .then(response => response.data)
            .catch (err => console.log(err))
    }
     