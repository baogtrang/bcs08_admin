// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./page/UserPage/UserPage";
import MoviePage from "./page/MoviePage/MoviePage";
import HomeLayout from "./layout/Layout";
import FormLogin from "./page/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Layout.js */}
          {/* để ý Route của HomeLayout cũng ko có "s" như của UserPage và MoviePage */}
          <Route path="" element={<HomeLayout />}> 
            <Route path="/user" element={<UserPage />} />
            <Route path="/movie" element={<MoviePage />} />
          </Route>
          <Route path="/login" element={<FormLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
