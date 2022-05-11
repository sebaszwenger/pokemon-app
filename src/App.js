import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import List from "./pages/List";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import View from "./pages/View";

function App() {
  //State that checks if the user is logged in
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("pokeIsLogged")
  );

  return (
    <div className="w-full bg-slate-400 flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={
            isLogged === "true" ? (
              <LandingPage isLogged={isLogged} setIsLogged={setIsLogged} />
            ) : (
              <Login setIsLogged={setIsLogged} />
            )
          }
        />
        <Route
          path="/login"
          element={
            isLogged === "true" ? (
              <LandingPage isLogged={isLogged} setIsLogged={setIsLogged} />
            ) : (
              <Login setIsLogged={setIsLogged} />
            )
          }
        />
        <Route
          path="/list"
          element={
            isLogged === "true" ? <List /> : <Login setIsLogged={setIsLogged} />
          }
        />
        <Route
          path="/pokemon/:id"
          element={
            isLogged === "true" ? <View /> : <Login setIsLogged={setIsLogged} />
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
