# Frontend 

Este es el frontend del proyecto técnico fullstack desarrollado con React + Vite para Tecnimática. El sistema permite buscar películas mediante la API de OMDb, agregar favoritas y gestionar sesiones de usuario (login). Utiliza un diseño limpio, modular y profesional.

---

## 🧱 Stack Tecnológico

- React
- Vite
- TypeScript
- TailwindCSS
- React Router DOM
- @mui/x-data-grid
- @mui/icons-material

---

## 📁 Estructura del Proyecto

```
src/
├── assets/               # Archivos estáticos
├── base-components/      # Componentes base como Input, Modal, Button, etc.
├── components/           # Componentes específicos
├── layouts/              # Layout principal y contenedores
├── pages/                # Páginas principales (Home, Login, etc.)
├── router/               # Configuración de rutas
├── translations/         # Archivos de i18n (internacionalización)
├── types/                # Tipos globales
├── utils/                # Funciones utilitarias
└── main.tsx              # Punto de entrada
```

---

## ⚙️ Requisitos previos

- Node.js >= 18.x
- npm >= 9.x o yarn >= 1.22
- Tener configurada la API del backend (ASP.NET Core) y el API KEY de OMDb

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo-frontend.git
cd nombre-del-proyecto-frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear el archivo `.env` en la raíz del proyecto con las siguientes variables:

```
VITE_API_URL=http://localhost:5000/api
VITE_OMDB_API_KEY=tu_clave_de_api_omdb
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

---

## 🌐 Funcionalidades implementadas

- 🔍 Búsqueda de películas por título usando la API de OMDb.
- ⭐ Añadir o eliminar películas de la lista de favoritas.
- 🔐 Login de usuario con validación desde backend.
- 🧭 Navegación entre vistas con rutas protegidas.
- 📁 Organización modular y componentes reutilizables.
- 📊 Uso de @mui/x-data-grid para presentación de favoritos.

---

## 📦 Comandos útiles

| Comando           | Descripción                      |
|-------------------|----------------------------------|
| `npm run dev`     | Ejecuta el proyecto en modo dev  |
| `npm run build`   | Genera la build de producción    |
| `npm run preview` | Previsualiza la build            |

---

