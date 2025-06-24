import { useState } from "react";
import axios from "axios";
import { Button } from "../../base-components/Button";
import { Input } from "../../base-components/Input";
import { Modal } from "../../base-components/Modal";
import { getToken, getUserId } from "../../utils/authUtils";

export interface Movie {
    title: string;
    year: string;
    imdbID: string;
    type: string;
    poster: string;
}

const SearchMovies = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleSearch = async () => {
        if (!searchTerm) return;

        setLoading(true);
        setError("");
        setResults([]);

        try {
            const token = getToken();

            const response = await axios.get("http://localhost:5151/api/Movies/search", {
                params: { title: searchTerm },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setResults(response.data);
        } catch {
            setError("Error al buscar películas. Intenta nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    };

    const handleAddToFavorites = async () => {
        const token = getToken();
        const userId = getUserId();

        if (!selectedMovie) {
            alert("No se ha seleccionado ninguna película.");
            return;
        }

        if (!userId) {
            alert("No se encontró el usuario. Por favor inicia sesión nuevamente.");
            return;
        }

        try {
            await axios.post(
                "http://localhost:5151/api/FavoriteMovies",
                {
                    user_id: Number(userId),
                    imdb_id: selectedMovie.imdbID,
                    title: selectedMovie.title,
                    year: selectedMovie.year,
                    poster: selectedMovie.poster,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch {
            alert("Error al agregar la película ");
        } finally {
            setShowModal(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Buscar Películas</h1>

            <div className="flex gap-2 mb-4">
                <div className="flex-1">
                    <Input
                        label=""
                        type="text"
                        placeholder="Ingrese el título de la película"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Button onClick={handleSearch} fullWidth={false}>Buscar</Button>

            </div>

            {loading && <p>Buscando películas...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {results.map((movie) => (
                    <li
                        key={movie.imdbID}
                        className="p-4 border rounded bg-white shadow cursor-pointer hover:bg-gray-50"
                        onClick={() => handleMovieClick(movie)}
                    >
                        <h2 className="text-lg font-semibold">{movie.title}</h2>
                        <p className="text-sm text-gray-600">{movie.year}</p>
                        {movie.poster && movie.poster !== "N/A" && (
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="mt-2 w-full h-64 object-cover"
                            />
                        )}
                    </li>
                ))}
            </ul>

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleAddToFavorites}
                title="¿Agregar a favoritos?"
                message={`¿Deseas agregar "${selectedMovie?.title}" a tu lista de favoritas?`}
            />
        </div>
    );
};

export default SearchMovies;