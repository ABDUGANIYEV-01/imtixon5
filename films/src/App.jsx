import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import Layout from "./Components/Layout/Layout";
import Login from "./Views/Login/Login";
import Movies from "./Views/movies/Movies";
import LoginProvider from "./Provider/LoginProvider";
import MovieProvider from "./Provider/MovieProvider";
import Search from "./Views/Search/Search";
import Categories from "./Views/Categories/Categories";
import SingleCategoty from "./Views/SingleCategory/SingleCategoty";


function App() {

  return (
    <LoginProvider>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
              <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="search" element={<Search />} />
              <Route path="category" element={<Categories />} />
              <Route path="category/:title" element={<SingleCategoty />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </LoginProvider>
  );
}

export default App;
