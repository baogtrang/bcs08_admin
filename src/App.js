import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./page/UserPage/UserPage";
import MoviePage from "./page/MoviePage/MoviePage";
import HomeLayout from "./layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeLayout />}>
            <Route path="/user" element={<UserPage />} />
            <Route path="/movie" element={<MoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
