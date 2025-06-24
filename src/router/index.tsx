import { useRoutes } from "react-router-dom";
import Login from "../components/Login/loginComponent";
import Home from "../components/Home/homeComponent";
import ProtectedRoute from "./ProtectedRoute";
import SearchMovies from "../components/Home/searchMoviesComponent";
import FavoritesMovies from "../components/Home/FavoritesMovies";
import Register from "../components/Login/RegisterUser/registerComponent";

function Router() {
  const routes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "search",
          element: <SearchMovies />,
        },
        {
          path: "favorites",
          element: <FavoritesMovies />,
        }
      ],
    },
    {
      path: "*",
      element: <Login />,
    },
  ];

  return useRoutes(routes);
}

export default Router;