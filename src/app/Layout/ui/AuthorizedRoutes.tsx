import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";

const AuthorizedRoutesLayout: FC = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  console.log("test", userId);

  useEffect(() => {
    if (isLoaded && !userId) {
      // TODO navigate to sign in route
      navigate("/sign-in");
    }
  }, [isLoaded, navigate, userId]);

  // TODO add loading bar
  if (!isLoaded) return "Loading...";

  return <Outlet />;
};

export default AuthorizedRoutesLayout;
