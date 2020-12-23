import { createContext, useContext } from "react";
import { useUser } from "./useUser";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
export const AuthContext = createContext({ user: {} });

export const AuthProvider = (props) => {
  const user = useUser();
  return <AuthContext.Provider value={user} {...props} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useRequireAuth = () => {
  const auth = useAuth();
  const router = useRouter();
  const toast = useToast();
  useEffect(() => {
    if (auth && auth.user === false) {
      router.push("/");
    } else if (auth.user !== undefined && auth.user?.role !== "admin") {
      toast({
        title: "Unaothorized.",
        description: `You don't have permission to access this page.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      router.push("/");
    }
  }, [auth, router]);

  return auth;
};
