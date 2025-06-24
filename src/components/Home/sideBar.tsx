import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";

const SideBar = () => {
  const { pathname } = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const linkClass = (path: string) =>
    `flex items-center gap-2 py-2 px-4 rounded-lg transition-colors ${
      pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-800 hover:bg-blue-100"
    }`;

  return (
    <aside className="flex flex-col justify-between h-full md:h-screen w-64 bg-white shadow-lg p-4 fixed top-0 left-0 z-50">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <MovieIcon color="primary" />
          <h2 className="text-xl font-bold">Películas</h2>
        </div>

        <Divider className="mb-4" />

        <nav className="flex flex-col space-y-2">
          <Link to="/home/search" className={linkClass("/home/search")}>
            <SearchIcon fontSize="small" />
            Buscar películas
          </Link>
          <Link to="/home/favorites" className={linkClass("/home/favorites")}>
            <FavoriteIcon fontSize="small" />
            Mis favoritas
          </Link>
        </nav>
      </div>

      <div className="mt-4">
        <Divider className="mb-4" />
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded w-full"
        >
          <LogoutIcon fontSize="small" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
