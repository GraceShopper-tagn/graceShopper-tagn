import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const useAuth = () => {
  const { user, setUser, token, setToken } = useContext(AuthContext);

  return {
    user,
    setUser,
    token,
    setToken,
  };
};

export default useAuth;
