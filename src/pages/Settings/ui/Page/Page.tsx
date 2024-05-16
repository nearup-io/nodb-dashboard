import { FC, useEffect } from "react";
import { useGet } from "@/app/hooks";
import { User } from "app/redux/reducors/user.slice.ts";

const Settings: FC = () => {
  const get = useGet();

  useEffect(() => {
    (async () => {
      const user = await get<User>({
        url: "/users/profile",
      });
      console.log(user);
    })();

    return () => {};
  }, []);

  return <>Settings page</>;
};

export default Settings;
