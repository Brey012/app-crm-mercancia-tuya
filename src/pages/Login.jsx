import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [name, SetName] = useState("");
  const [password, SetPassword] = useState("");
  let reactNavigate = useNavigate();

  function IniciarSesion(user, password) {
    if(user === "admin" && password === "1234"){
        reactNavigate('/Home')
    } else {
        alert("Bobo")
    }
  }



  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input type="checkbox" className="toggle" />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form className="flip-card__form" action="">
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => SetName(e.target.value)}
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => SetPassword(e.target.value)  }
                />
                <button
                  className="flip-card__btn"
                  onClick={() => IniciarSesion(name, password)} 
                  type="button"
                >
                  Let`s go!
                </button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form" action="">
                <input
                  className="flip-card__input"
                  placeholder="Name"
                  type="name"
                />
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <button
                  type="button"
                  className="flip-card__btn"
                  
                >
                  Confirm!
                </button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Login;
