import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";

export const ContextSource = createContext();

export function useAuth() {
  return useContext(ContextSource);
}

const ContextAPI = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  // getting user info from localstorage
  useEffect(() => {
    setLoading(true);
    const userInfo = JSON.parse(localStorage.getItem("loginUser"));
    setUser(userInfo);
  }, []);

  const data = {
    user,
    products,
    setProducts,
    loading,
    setLoading,
    message,
    setMessage,
  };

  return (
    <ContextSource.Provider value={data}>{children}</ContextSource.Provider>
  );
};

export default ContextAPI;
