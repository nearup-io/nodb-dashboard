import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import {
  selectIsUserLoggedIn,
  setUser,
  User,
} from "@/app/redux/reducors/user.slice.ts";
import { useDispatch, useSelector } from "react-redux";
import { getAxiosInstance } from "app/axios.ts";

const AuthorizedRoutesLayout: FC = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const isAuthenticated = useSelector(selectIsUserLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const user = await getAxiosInstance().get<User>("/users/profile");
      dispatch(setUser(user.data));
    };

    if (isLoaded && isSignedIn && !isAuthenticated) {
      getUser();
    } else {
      navigate("/sign-in");
    }

    return () => {};
  }, []);

  // TODO add loading bar
  if (!isLoaded) return "Loading...";

  return <Outlet />;
};

export default AuthorizedRoutesLayout;
