import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        navigate("/");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (error) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return {
    login,
    logout,
    loading,
    error,
    isAuthenticated,
  };
};

export default useAuth;
