"use client";
import { LoginButton } from "@telegram-auth/react";
import { useUpdateUserSettingsMutation } from "@/app/redux/api/userApi";

const TelegramLogin = () => {
  const [updateTelegramSettings] = useUpdateUserSettingsMutation();

  return (
    <LoginButton
      // TODO add botUsername to .env
      botUsername="nodb999bot"
      onAuthCallback={async (data) => {
        const settings = await updateTelegramSettings({
          telegramId: data.id,
        }).unwrap();

        console.log("settings", settings);
      }}
      buttonSize="large" // "large" | "medium" | "small"
      cornerRadius={5} // 0 - 20
      showAvatar={true} // true | false
      lang="en"
    />
  );
};
export default TelegramLogin;
