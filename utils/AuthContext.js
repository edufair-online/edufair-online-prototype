import { createContext, useContext } from "react";
import { useUser } from "./useUser";

export const AuthContext = createContext({ user: {} });

export const AuthProvider = (props) => {
  const user = useUser();
  return <AuthContext.Provider value={user} {...props} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
