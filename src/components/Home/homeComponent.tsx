import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sideBar";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const Home = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDashboardRoot = location.pathname === "/home";

  return (
    <div className="flex min-h-screen">
      {/* Sidebar para escritorio */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Botón hamburguesa para móviles */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <IconButton onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Sidebar móvil deslizable */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-2">
          <IconButton onClick={() => setIsSidebarOpen(false)}>
            <CloseIcon />
            
          </IconButton>
        </div>
        <Sidebar />
      </div>

      {/* Fondo oscuro al abrir menú móvil */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Contenido principal */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto mt-16 md:mt-0 md:ml-64">
        {isDashboardRoot ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              ¡Bienvenido al Dashboard de Películas!
            </h1>
            <p className="text-gray-600">
              Usa la barra lateral para buscar películas o revisar tus favoritas.
            </p>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
};

export default Home;
