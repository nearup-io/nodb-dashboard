import { Telegram, Whatsapp } from "../Integrations";
import { FC } from "react";

const Settings: FC = () => {
  // TODO select user profile instead of user and do this with async thunks
  const handleTelegram = (checked: boolean) => {
    console.log("telegram checked" + checked);
  };

  const handleWhatsapp = (checked: boolean) => {
    console.log("whatsapp checked" + checked);
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
