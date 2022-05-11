import { NavLink } from "react-router-dom";
import List from "./List";

const LandingPage = ({ isLogged, setIsLogged }) => {
  //Logout the user from local storage
  function logOut() {
    localStorage.setItem("isLogged", "false");
    localStorage.setItem("userId", "");
    setIsLogged("false");
  }
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-center text-3xl my-8 text-teal-700">
          Pokemon App
        </h1>
        <div>
          <button
            type="submit"
            onClick={logOut}
            className="bg-teal-600 py-1 px-2 rounded-md shadow-md shadow-teal-900 font-bold text-lg"
          >
            {isLogged ? (
              <NavLink to="/login">LogOut</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </button>
        </div>
      </div>

      <hr />
      <p className="text-lg py-5">
        Pokemon App es una wiki de pokemones en la que se pueden ver todos los
        distintos pokemones. Al hacer click en cada tarjeta se podran ver los
        atributos principales de dicho{" "}
        <span className="text-teal-700 font-bold">Pokemon.</span>
      </p>
      <hr />

      <List />
    </div>
  );
};

export default LandingPage;
