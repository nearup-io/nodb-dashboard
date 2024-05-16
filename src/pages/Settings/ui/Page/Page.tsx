import { FC, useEffect } from "react";
import { useGet } from "@/app/hooks";

const Settings: FC = () => {
  const get = useGet();

  useEffect(() => {
    (async () => {
      const user = await get<{ userName: string }>({
        url: "/users/profile",
      });
      console.log(user);
    })();

    return () => {};
  }, []);

  return <>Settings page</>;
};

export default Settings;
