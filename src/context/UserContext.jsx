import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("auth") || null)
  );

  // Funcion que guarda al usuario
  const storeUser = (dataUser) => {
    setUser(dataUser);

    localStorage.setItem("auth", JSON.stringify(dataUser));
  };

  // Funcion que elimina al usuario de context
  const cleanUser = () => {
    setUser(null);

    localStorage.removeItem("auth");
  };

  return (
    <UserContext.Provider value={{ user, storeUser, cleanUser }}>
      {children}
    </UserContext.Provider>
  );
};
