import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Table } from "../../base-components/Table";
import { Button } from "../../base-components/Button";
import type { GridColDef } from "@mui/x-data-grid/models";
import { getToken, getUserId } from "../../utils/authUtils";

export interface FavoriteMovie {
    id: number;
    user_id: number;
    imdb_id: string;
    title: string;
    year: string;
    poster: string;
}

const FavoritesMovies = () => {
    const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);

    const fetchFavorites = useCallback(async () => {
        try {
            const userId = getUserId();
            const token = getToken();

            const response = await axios.get(
                `http://localhost:5151/api/FavoriteMovies/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("response", response.data);

            setFavorites(response.data);
        } catch (error) {
            console.error("Error al obtener las películas favoritas:", error);
        }
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const token = getToken();
            await axios.delete(`http://localhost:5151/api/FavoriteMovies/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setFavorites((prev) => prev.filter((movie) => movie.id !== id));
        } catch (error) {
            console.error("Error al eliminar la película:", error);
        }
    };

    useEffect(() => {
        fetchFavorites();
    }, [fetchFavorites]);

    const columns: GridColDef[] = [
        {
            field: "poster",
            headerName: "Poster",
            width: 100,
            renderCell: (params: { row: { poster: string | undefined; title: string | undefined; }; }) => (
                <img
                    src={params.row.poster}
                    alt={params.row.title}
                    style={{ width: "50px", height: "75px", objectFit: "cover" }}
                />
            ),
        },
        { field: "title", headerName: "Título", flex: 1 },
        { field: "year", headerName: "Año", width: 100 },
        { field: "imdb_id", headerName: "IMDb ID", width: 150 },
        {
            field: "actions",
            headerName: "Acciones",
            width: 130,
            sortable: false,
            renderCell: (params) => (
                <Button
                    text="Eliminar"
                    variant="danger"
                    fullWidth={false}
                    onClick={() => handleDelete(params.row.id)}
                />
            ),
        },
    ];


    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-3xl font-bold mb-6">Mis Películas Favoritas</h1>
            <Table columns={columns} data={favorites} getRowId={(row: { id: number; }) => row.id} />
        </div>
    );
};

export default FavoritesMovies;
