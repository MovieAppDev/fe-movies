# fe-movies

Este es el proyecto frontend de una aplicación para búsqueda y gestión de películas, desarrollada en React con Vite. Consume datos desde la API pública de OMDb y permite al usuario buscar películas, ver detalles y marcarlas como favoritas. La persistencia de datos está gestionada mediante un backend en ASP.NET Core.

## Tecnologías utilizadas

- React 18
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios
- @mui/x-data-grid
- @mui/icons-material
- i18next para internacionalización

## Requisitos previos

- Node.js v18 o superior
- npm o yarn
- Clave de API válida de OMDb
- Backend en funcionamiento para la gestión de usuarios y favoritos

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/usuario/fe-movies.git
cd fe-movies

    Instalar dependencias

npm install

    Configurar las variables de entorno

Crear un archivo .env en la raíz del proyecto con el siguiente contenido:

VITE_API_URL=http://localhost:5000/api
VITE_OMDB_API_KEY=tu_clave_de_api_omdb

Reemplazar tu_clave_de_api_omdb con tu clave personal de OMDb.

    Ejecutar la aplicación

npm run dev

El proyecto estará disponible en http://localhost:5173.
Estructura del proyecto

src/
├── base-components/        # Componentes reutilizables: botones, inputs, modales
├── components/             # Componentes principales (Home, Search, Favorites)
│   └── Home/
│       └── HomeComponent.tsx
├── layouts/                # Layout general con sidebar y contenido principal
├── router/                 # Configuración de rutas
├── services/               # Funciones de consumo de API (OMDb y backend)
├── translations/           # Archivos de traducción por idioma
├── types/                  # Tipos de datos en TypeScript
├── utils/                  # Funciones auxiliares reutilizables
├── App.tsx                 # Componente raíz
└── main.tsx                # Punto de entrada de la aplicación

Funcionalidades

    Búsqueda de películas por título usando OMDb

    Visualización de carátulas, título y año de cada película

    Marcado de películas como favoritas por usuario autenticado

    Visualización de lista de películas favoritas

    Interfaz responsive adaptable a dispositivos móviles

    Estructura modular con separación de responsabilidades

    Sistema de internacionalización (i18n)

Buenas prácticas aplicadas

    Principios SOLID en la estructuración del código

    Separación entre lógica de presentación, servicios y tipos

    Uso de componentes reutilizables y desacoplados

    Arquitectura limpia orientada a mantenimiento y escalabilidad

    Uso adecuado de hooks de React y tipado estricto con TypeScript

Instalación y configuración del backend

Consultar el repositorio correspondiente al backend para configurar correctamente el entorno de persistencia, autenticación y gestión de favoritos: be-movies.
Notas adicionales

    Las peticiones a la API OMDb se realizan vía parámetro s= para búsquedas generales, y t= o i= para obtener detalles.

    El login ya se encuentra implementado pero puede requerir configuración adicional si se desea usar autenticación persistente.

    El proyecto puede ser desplegado fácilmente en servicios como Vercel, Netlify o servidor personalizado.
