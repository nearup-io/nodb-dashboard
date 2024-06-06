import { Telegram } from "../Integrations";
import { FC, useState } from "react";
import { type UserTelegramSettings } from "@/app/redux/reducors/user.slice.ts";

const Settings: FC = () => {
  const [userTelegramSettings, setUserTelegramSettings] =
    useState<UserTelegramSettings>();

  // TODO select user profile instead of user and do this with async thunks
  const handleTelegram = (data) => {
    // console.log("telegram checked" + checked);
    console.log(data);
  };

  // TODO should come from state
  const applications = [
    {
      name: "appName",
      environments: ["env1", "env2", "env3"],
    },
    {
      name: "appName2",
      environments: ["env4", "env5"],
    },
    {
      name: "appName3",
      environments: ["env6"],
    },
  ];

  const initialTelegramSettings = {
    checked: true,
  };

  const handleWhatsapp = (checked: boolean) => {
    console.log("whatsapp checked" + checked);
  };

  const handleSaveChangesClick = () => {};

  return (
    <div className="mb-5 ml-72 mr-72">
      <div className="mb-3 flex">
        <h1 className="text-3xl font-bold">Your Preferences</h1>
      </div>
      <div className="flex flex-col justify-center gap-2 text-center">
        <Telegram
          initialState={initialTelegramSettings}
          applications={applications}
          handleState={() => {
            console.log("hello");
          }}
        />
        {/*<Whatsapp initialState={true} handleChecked={handleWhatsapp} />*/}
        <div className="flex flex-row justify-center">
          <button
            className="btn-outline btn w-36"
            onClick={() => handleSaveChangesClick()}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
