import { useState } from "react";
import { Input } from "../../../base-components/Input";
import { Button } from "../../../base-components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5151/api/Auth/Register", {
        email,
        password
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/login");
    } catch {
      setError("Error al crear la cuenta. Intenta con otro correo.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f1f2f5] px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Crear cuenta</h2>

        {error && (
          <div className="text-sm text-red-600 mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            label="Correo electrónico *"
            type="email"
            placeholder="correo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Contraseña *"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            label="Confirmar contraseña *"
            type="password"
            placeholder="Repite la contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
            Crear cuenta
          </Button>
          <div className="text-center">
            <a href="/login" className="text-sm text-blue-600 hover:underline">
              ¿Ya tienes cuenta? Inicia sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
