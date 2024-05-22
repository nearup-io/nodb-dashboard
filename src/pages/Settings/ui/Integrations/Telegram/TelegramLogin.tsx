"use client";
import { LoginButton } from "@telegram-auth/react";
import { usePatch } from "@/app/hooks";

const TelegramLogin = () => {
  const patch = usePatch();
  return (
    <LoginButton
      // TODO add botUsername to .env
      botUsername="nodb999bot"
      onAuthCallback={async (data) => {
        console.log(data);
        await patch({
          url: "/users/settings/telegram",
          body: { telegramId: data.id },
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
