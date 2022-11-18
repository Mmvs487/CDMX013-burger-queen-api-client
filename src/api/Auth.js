import axios from "axios"

const Auth = ()=>{
        return axios
        .get('https://6377a4945c47776512238f30.mockapi.io/api/auth')
        .then(
            response => console.log(response.data)
        )
        .catch(err => {
            console.log(err)
        })
    } 

export default Auth