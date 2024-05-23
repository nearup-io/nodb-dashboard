import { Telegram, Whatsapp } from "../Integrations";
import { FC } from "react";
import { updateUserSettings } from "@/app/redux/reducors/user.slice";
import { useAppDispatch } from "@/app/redux/hooks";

const Settings: FC = () => {
  const dispatch = useAppDispatch();
  // TODO select user profile instead of user and do this with async thunks
  const handleTelegram = (checked: boolean) => {
    dispatch(
      updateUserSettings({
        telegramId: 555,
      }),
    );
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
