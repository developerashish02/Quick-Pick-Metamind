import { useState } from "react";
import { URLS } from "../utils/api";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(URLS?.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed!");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setLoading(false);
      return data.token;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  return { login, loading, error };
};

export default useLogin;
