import logo from "../../images/logo-carinito.png";
import "./login.css";
import { useState } from "react";
import Auth from "../../api/Auth";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

console.log(Auth())

  return (
    <div className="container">
      <img src={logo} alt="logo"></img>

      <div className="inputsContainer">
        <div className="emailContainer">
          <input
            type="text"
            name="email"
            placeholder="E-MAIL"
            className="inputLogin"
            onChange={(e) =>setEmail(console.log(e.target.value))}
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            className="inputLogin"
            onChange={(e) =>setPassword(e.target.value)}
          />
          <button className="login-button">LOG IN</button>
        </div>
      </div>
    </div>
  );

}
