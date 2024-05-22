import { FC, useEffect, useState } from "react";
import { useGet } from "@/app/hooks";
import { User } from "@/app/redux/reducors/user.slice.ts";
import { Telegram, Whatsapp } from "../Integrations";

const Settings: FC = () => {
  const get = useGet();
  const [user, setUser] = useState<User>();
  // TODO set checked on and off dependent on settings
  useEffect(() => {
    // (async () => {
    //   const user = await get<User>({
    //     url: "/users/profile",
    //   });
    //   setUser(user);
    // })();
  }, [get]);

  // console.log(user);

  const handleTelegram = (checked: boolean) => {
    console.log("telegram checked" + checked);
  };

  const handleWhatsapp = (checked: boolean) => {
    console.log("telegram checked" + checked);
  };

  return (
    <div className="mb-5 ml-72 mr-72">
      <div className="mb-3 flex">
        <h1 className="text-3xl font-bold">Your Preferences</h1>
      </div>
      <div className="flex flex-col justify-center gap-2 text-center">
        <Telegram initialState={true} handleChecked={handleTelegram} />
        <Whatsapp initialState={true} handleChecked={handleWhatsapp} />
      </div>
    </div>
  );
};

export default Settings;
