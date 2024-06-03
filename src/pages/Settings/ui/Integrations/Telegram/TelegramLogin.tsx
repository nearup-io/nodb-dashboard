"use client";
import { LoginButton } from "@telegram-auth/react";
import { FC } from "react";

const TelegramLogin: FC<{ handleClick: (telegramId: number) => void }> = ({
  handleClick,
}) => {
  return (
    <LoginButton
      // TODO add botUsername to .env
      botUsername="nodb999bot"
      onAuthCallback={async (data) => {
        handleClick(data.id);
      }}
      buttonSize="large" // "large" | "medium" | "small"
      cornerRadius={5} // 0 - 20
      showAvatar={true} // true | false
      lang="en"
    />
  );
};
export default TelegramLogin;
