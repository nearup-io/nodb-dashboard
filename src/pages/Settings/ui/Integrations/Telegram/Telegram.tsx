import { FC } from "react";
import BotComponent from "../BotComponent";
import TelegramIcon from "./TelegramIcon";
import TelegramLogin from "./TelegramLogin";
import { type UserTelegramSettings } from "@/app/redux/reducors/user.slice.ts";

type Props = {
  initialState: {
    checked: boolean;
    appName?: string;
    envName?: string;
  };
  applications: { name: string; environments: string[] }[];
  handleState: (settings: UserTelegramSettings) => void;
};

const Telegram: FC<Props> = ({ initialState, handleState, applications }) => {
  const handleTelegramLoginClick = (telegramId: number) => {
    console.log(telegramId);
  };

  const handleChange = (checked: boolean) => {
    // handleChecked(checked)
    // TODO we should have an object here
    // TODO update state from here
  };

  return (
    <BotComponent
      Icon={TelegramIcon}
      initialState={initialState}
      applications={applications}
      handleChecked={(checked) => handleChange(checked)}
      title="Telegram"
      subText="Link your telegram account"
      checkedInitial={initialState.checked}
    >
      <div className="ml-2">
        <TelegramLogin handleClick={handleTelegramLoginClick} />
      </div>
    </BotComponent>
  );
};

export default Telegram;
