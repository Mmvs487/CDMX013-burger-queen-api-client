import logo from "../../images/logo-carinito.png";
import "./login.css";

export default function Login() {
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
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            className="inputLogin"
          />
          <button className="login-button">LOG IN</button>
        </div>
      </div>
    </div>
  );
}
