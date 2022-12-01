import axios from "axios";

export const authMeals = () => {
    const menu = 'https://6377a4945c47776512238f30.mockapi.io/api/meals'
    return axios
        .get(menu)
        .then(response => response.data)
        .catch(err => console.log(err))
}
