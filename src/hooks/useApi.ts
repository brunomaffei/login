import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    // Dados Fake para teste
    return {
      user: { id: 3, name: "Bruno", email: "bruno@hotmail.com" },
    };
    const { data } = await api.post("/validate", { token });
    return data;
  },
  signin: async (email: string, password: string) => {
    // Dados fake para teste
    return {
      user: { id: 3, name: "Bruno", email: "bruno@hotmail.com" },
      token: "123456789",
    };
    const { data } = await api.post("/signin", { email, password });
    return data;
  },
  logout: async () => {
    return { status: true };
    const { data } = await api.post("/logout");
    return data;
  },
});
