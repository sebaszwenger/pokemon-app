import React, { useState, useRef } from "react";
import Error from "../components/Error";

/**
 * Datos validos:
 * Email: seba@test.com
 * Password: seba
 */

const Login = ({ setIsLogged }) => {
  //STATES --------------------------------------------
  const inputEmailRef = useRef("");
  const inputPassRef = useRef("");

  //state that checks if there is an error in the form data
  const [error, setError] = useState(false);

  //state that saves the error message to print on the screen
  const [message, setMessage] = useState("");

  //FUNCTIONS --------------------------------------------

  //Handle the submit form
  function handleSubmit(e) {
    e.preventDefault();
    // }
    const inputEmail = inputEmailRef.current.value;
    const inputPass = inputPassRef.current.value;

    //validate the form data
    if ([inputEmail, inputPass].includes("")) {
      setMessage("All fields are required");
      setError(true);
      return;
    }

    //Validate username and password
    if (inputEmail === "seba@test.com" && inputPass === "seba") {
      setIsLogged("true");
      window.localStorage.setItem("pokeIsLogged", "true");

      //Clear the previous error message
      setError(false);
    } else {
      setError(true);
      setMessage("Invalid username or password");
      window.localStorage.setItem("pokerIsLogged", "false");
    }
  }

  return (
    <div className="w-full h-screen bg-slate-400 flex justify-center items-center">
      <div className="w-full">
        <div className="bg-white py-10 px-6 shadow-lg shadow-gray-900 rounded-lg sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
          <legend className="text-xl text-center mb-5 text-gray-900 font-bold">
            Login
          </legend>
          <form className="mb-0 space-y-6 text-lg" onSubmit={handleSubmit}>
            {error && <Error message={message} />}

            <div className="">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
                <div className="mt-1">
                  <input
                    ref={inputEmailRef}
                    name="email"
                    id="email"
                    type="email"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 fucus:ring-blue-400"
                  />
                </div>
              </label>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
                <div className="mt-1">
                  <input
                    ref={inputPassRef}
                    name="password"
                    id="password"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 fucus:ring-blue-400"
                    type="password"
                  />
                </div>
              </label>
            </div>

            <button className="py-2 px-6 font-semibold rounded-md   bg-teal-600 w-full shadow-sm shadow-teal-900">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
