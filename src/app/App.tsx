import { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthorizedRoutesLayout, Layout } from "@/app/Layout";
import { NoMatch, Settings, SignIn } from "@/pages";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useAppDispatch } from "@/app/redux/hooks.ts";
import { clearUser, setUser } from "@/app/redux/reducors/user.slice.ts";
import { setAxiosInstanceDefaultHeaders } from "@/app/axios.ts";

const App: FC = () => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded, getToken } = useAuth();
  const { user } = useUser();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSignedIn && isLoaded && user) {
      (async () => {
        const jwtToken = await getToken();
        if (!jwtToken) {
          navigate("/");
          return;
        }
        setAxiosInstanceDefaultHeaders(jwtToken);
      })();
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
  }, [isLoaded, isSignedIn, getToken, navigate, user, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SignIn />} />
        <Route path="*" element={<AuthorizedRoutesLayout />}>
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
