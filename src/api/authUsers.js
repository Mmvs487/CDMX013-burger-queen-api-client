import axios from "axios";

const authUsers = (emailValue, passwordValue, callBack) => {
  const string = `https://6377a4945c47776512238f30.mockapi.io/api/auth?user=${emailValue}`;
  return axios
    .get(string)
    .then((response) => {
      const data = response.data;
      data.forEach((data) => {
        if (emailValue === "" || passwordValue === "") {
          callBack("Please enter your login credentials");
          return console.log("invalid");
        }else if(data.user !== emailValue){ 
          callBack('Invalid credentials, please contact your admin')
        } else if (data.user === emailValue) {
          callBack("valid");
          return console.log("valid" + emailValue);
        } else {
          callBack("invalid");
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default authUsers;
