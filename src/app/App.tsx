import { FC, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AuthorizedRoutesLayout, Layout } from "@/app/Layout";
import { NoMatch, Settings, SignIn, SignUp } from "@/pages";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useAppDispatch } from "@/app/redux/hooks.ts";
import { clearUser, setUser } from "@/app/redux/reducors/user.slice.ts";
import { userApi } from "@/app/redux/api/userApi.ts";
import { Loading } from "@/widgets";

const App: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const userSyncDispatch = userApi.endpoints.syncUser.initiate;

  useEffect(() => {
    if (!isLoaded || location.pathname === "/sign-up") {
      return;
    }

    if (isSignedIn && isLoaded && user) {
      dispatch(userSyncDispatch());
      dispatch(
        setUser({
          clerkUserId: user.id,
          email: user.primaryEmailAddress?.emailAddress || "",
        }),
      );

      navigate("/settings");
    } else {
      dispatch(clearUser());
      navigate("/");
    }
  }, [
    isLoaded,
    isSignedIn,
    user,
    dispatch,
    userSyncDispatch,
    location.pathname,
    navigate,
  ]);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<AuthorizedRoutesLayout />}>
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
