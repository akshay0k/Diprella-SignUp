import React, { useState } from "react";
import Icon from "../../public/icons.png";
import Icon1 from "../assets/facebook-f.svg";
import Icon2 from "../assets/google-plus-g.svg";
import Icon3 from "../assets/linkedin-in.svg";
import user from "../assets/user-solid.svg";
import emails from "../assets/envelope-regular.svg";
import passwords from "../assets/lock-solid.svg";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
    checkButtonDisabled();
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
    checkButtonDisabled();
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
    checkButtonDisabled();
  };

  const validateName = (value) => {
    if (!value) {
      setNameError("Name is required");
    } else if (value.length < 4 || value.length > 20) {
      setNameError("Name should be between 4 and 20 characters");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!value) {
      setPasswordError("Password is required");
    } else if (!passwordRegex.test(value)) {
      setPasswordError("Password should have at least one uppercase letter, one number, and one special character");
    } else {
      setPasswordError("");
    }
  };

  const checkButtonDisabled = () => {
    setIsButtonDisabled(!(name && email && password && !nameError && !emailError && !passwordError));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && !nameError && !emailError && !passwordError) {
      const formData = {
        name: name,
        email: email,
        password: password,
      };
      console.log(formData);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row">
      <div className="bg-green-400 lg:w-[600px] p-10 md:w-1/2">
        <img src={Icon} alt="" className="top-0 w-28" />

        <div className="flex flex-col items-center justify-center mt-10 md:mt-44 gap-5">
          <h1 className="text-white font-bold text-[32px] md:text-[62px]">
            Welcome Back!
          </h1>
          <p className="text-white text-[16px] md:text-[25px] text-center">
            To keep connected with us please <br />
            login with your personal info
          </p>

          <button className="text-white border-2 font-semibold px-12 md:px-24 py-2 md:py-3 rounded-[30px] border-white bg-green-400">
            SIGN IN
          </button>
        </div>
      </div>

      <div className="flex-auto  md:w-[500px]">
        <div className="flex flex-col items-center justify-center mt-10 md:mt-28 gap-8">
          <h1 className="font-bold text-[#00bb93] text-[24px] md:text-[50px]">
            Create Account
          </h1>
          <div className="flex gap-2 md:gap-3 ">
            <img className="border px-4 py-3 rounded-full" src={Icon1} alt="" />
            <img className="border px-4 py-3 rounded-full" src={Icon2} alt="" />
            <img className="border px-4 py-3 rounded-full" src={Icon3} alt="" />
          </div>
          <p className="text-[#dfdfdf]">or use your email for registration:</p>
        </div>

        <div >
          <form className="flex flex-col items-center justify-center gap-7 mt-6 md:mt-12" onSubmit={handleSubmit}>
            <div className="relative">
              <img className="absolute mt-3 ml-4" src={user} alt="" />
              <input
                id="name"
                value={name}
                onChange={handleNameChange}
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md px-6 py-2 md:px-14 md:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {nameError && <p className="text-red-500">{nameError}</p>}

            <div className="relative">
              <img className="absolute mt-3 ml-3 " src={emails} alt="" />
              <input
                id="email"
                onChange={handleEmailChange}
                value={email}
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md px-6 py-2 md:px-14 md:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {emailError && <p className="text-red-500">{emailError}</p>}

            <div className="relative">
              <img className="absolute mt-3 ml-3" src={passwords} alt="" />
              <input
                id="password"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-md px-6 py-2 md:px-14 md:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {passwordError && <p className="text-red-500">{passwordError}</p>}

            <button
              type="submit"
              disabled={isButtonDisabled}
              className="bg-[#00bf98] text-white border-2 font-semibold px-12 md:px-24 py-2 md:py-3 rounded-[30px] border-white"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
