import { useState } from "react";
import { Button } from "../../base-components/Button";
import { Input } from "../../base-components/Input";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5151/api/Auth/Login", {
        email,
        password,
      }, { withCredentials: true, });
      console.log("response", response);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/home");
    } catch {
      setError("Credenciales inválidas. Intenta nuevamente.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f1f2f5] px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Inicia sesión</h2>

        {error && (
          <div className="text-sm text-red-600 mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            label="Correo electrónico *"
            placeholder="correo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              label="Contraseña *"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute right-3 bottom-2.5 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
            Ingresar
          </Button>
          <div className="text-center">
            <a href="/register" className="text-sm text-blue-600 hover:underline">
              ¿No tienes cuenta? Regístrate
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;