import axios from "axios";

const apiUsers = 'https://6377a4945c47776512238f30.mockapi.io/api/auth';

export const getUsers = () =>{
    return axios
    .get(apiUsers)
    .then((response) => {
      const data = response.data;
      return data;
    })

    .catch(error => {
        console.log('Error', error)
    })
}

export const postUsers = (newUser) => {
  return axios.post(apiUsers, newUser)
      .then(response => {
          return response.data
      })
      .catch(error => {
          console.log('Error', error)
      })
};

