"use client";
import { LoginButton } from "@telegram-auth/react";
import { getAxiosInstance } from "@/app/axios.ts";

const TelegramLogin = () => {
  return (
    <LoginButton
      // TODO add botUsername to .env
      botUsername="nodb999bot"
      onAuthCallback={async (data) => {
        console.log(data);
        await getAxiosInstance().patch("/users/settings/telegram", {
          telegramId: data.id,
        });
      }}
      buttonSize="large" // "large" | "medium" | "small"
      cornerRadius={5} // 0 - 20
      showAvatar={true} // true | false
      lang="en"
    />
  );
};
export default TelegramLogin;
