import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import {
  selectIsUserLoggedIn,
  setUser,
  User,
} from "@/app/redux/reducors/user.slice.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  getAxiosInstance,
  setAxiosInstanceDefaultHeaders,
} from "@/app/axios.ts";

const AuthorizedRoutesLayout: FC = () => {
  const { isSignedIn, isLoaded, getToken } = useAuth();
  const isAuthenticated = useSelector(selectIsUserLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const jwtToken = await getToken();
      if (!jwtToken) {
        navigate("/sign-in");
        return;
      }
      setAxiosInstanceDefaultHeaders(jwtToken);

      const user = await getAxiosInstance().get<User>("/users/profile");
      dispatch(setUser(user.data));
    };

    if (isLoaded && isSignedIn && !isAuthenticated) {
      getUser();
    }

    return () => {};
  }, []);

  // TODO add loading bar
  if (!isLoaded) return "Loading...";
  else if (isLoaded && !isSignedIn) navigate("/sign-in");
  return <Outlet />;
};

export default AuthorizedRoutesLayout;
