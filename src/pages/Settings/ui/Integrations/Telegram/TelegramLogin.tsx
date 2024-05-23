"use client";
import { LoginButton } from "@telegram-auth/react";
import { useAppDispatch } from "@/app/redux/hooks";
import { updateUserSettings } from "@/app/redux/reducors/user.slice";

const TelegramLogin = () => {
  const dispatch = useAppDispatch();

  return (
    <LoginButton
      // TODO add botUsername to .env
      botUsername="nodb999bot"
      onAuthCallback={async (data) => {
        console.log(data);
        dispatch(
          updateUserSettings({
            telegramId: data.id,
          }),
        );
        // await getAxiosInstance().patch("/users/settings/telegram", {
        //   telegramId: data.id,
        // });
      }}
      buttonSize="large" // "large" | "medium" | "small"
      cornerRadius={5} // 0 - 20
      showAvatar={true} // true | false
      lang="en"
    />
  );
};
export default TelegramLogin;
