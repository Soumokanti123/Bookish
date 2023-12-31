import React, { useEffect, useState } from "react";

import "./LoginRegister.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ForgetPassword } from "../Modal/forgetPasswordModal/ForgetPassword";

// import image1 from "./img/img1.svg";
// import image2 from "./img/img2.svg";

export const LoginRegister = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);
  const [modalForgetPassword, setModalForgetPassword] = useState(false);


  const modalHandlerForgetPassword = () => {
    setModalForgetPassword((prevState) => !prevState);
    console.log(modalForgetPassword);
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    category: [],
  });

  const [categories] = useState([
    "food",
    "medical",
    "rescue",
    "infrastructure",
    "others",
  ]);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // signup validation using regex
  // const nameRegex =
  //   /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

  // SignUp Handler for animation
  const signupHandler = () => {
    setIsSignIn((prevState) => !prevState);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    var errors = [];
    e.preventDefault();
    if (
      user.name === "" ||
      user.email === "" ||
      user.password === "" ||
      user.category === ""
    ) {
      errors[errors.length] = "Please fill all the fields for Registration";
      alert("Please fill all the fields for Registration");
      return;
    }

    // name validation

    // if (!nameRegex.test(user.name)) {
    //   errors[errors.length] = "Please enter a valid name";
    //   alert("Please enter a valid name");
    //   return;
    // }

    // email validation

    if (!emailRegex.test(user.email)) {
      errors[errors.length] = "Please enter a valid email";
      alert("Please enter a valid email");
      return;
    }

    // password validation

    if (!passwordRegex.test(user.password)) {
      errors[errors.length] = "Password must contain atleast 8 characters";
      alert("Password must contain atleast 6 characters");
      return;
    }
    console.log(errors);
    // if(errors.length > 0){
    //   alert(errors.join(" , "));
    // }

    //if mail id already exists validation
  };

  useEffect(() => {
    if (localStorage.getItem("category")) {
      navigate("/mypage");
    }
  });

  const onInputChange2 = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // login validation

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      //alert("Please fill all the fields");
      Swal.fire("Warning", "Please fill all the fields!", "warning");
      return;
    }
  };

  return (
    <div className={`containerLog  ${isSignIn ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            action="#"
            className="sign-in-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email Id"
                name="email"
                value={data.email}
                onChange={(e) => onInputChange2(e)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={(e) => onInputChange2(e)}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p onClick={() => modalHandlerForgetPassword()}>
              Forget Password ?
            </p>
          </form>
          <form
            action="#"
            className="sign-up-form"
            onSubmit={(e) => onSubmit(e)}
          >
            <h2 className="title">Sign up</h2>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Username"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="input-field">
              <i className="fas fa-list"></i>
              <select
                name="category"
                value={user.category}
                onChange={(e) => onInputChange(e)}
              >
                <option disabled selected hidden value="">
                  <span className="sel">Select Role</span>
                </option>
                <option value="food">FOOD</option>
                <option value="medical">MEDICAL</option>
                <option value="rescue">RESCUE</option>
                <option value="infrastructure">INFRASTRUCTURE</option>
                <option value="others">OTHERS</option>
              </select>
            </div>

            <input type="submit" class="btn solid" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Are you new here?</h3>
            <p>
              Join our literary community and unlock a world of reading
              delights. Sign up today and embark on a captivating journey
              through the pages of extraordinary stories and ideas.
            </p>
            <button
              className={`btn transparent`}
              id="sign-up-btn"
              onClick={signupHandler}
            >
              Sign up
            </button>
          </div>
          {/* <img src={image1} className="image" alt="" /> */}
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Have you registered already?</h3>
            <p>
              Open the Door to Endless Reading Pleasures: Sign in to Access Your
              Personalized Bookshelf and Explore New Literary Horizons.
            </p>
            <button
              className={`btn transparent  `}
              id="sign-in-btn"
              onClick={signupHandler}
            >
              Sign in
            </button>
          </div>
          {/* <img src={image2} className="image" alt="" /> */}
        </div>
      </div>
      {modalForgetPassword && (
        <ForgetPassword
          modalHandlerForgetPassword={modalHandlerForgetPassword}
        />
      )}
    </div>
  );
};
