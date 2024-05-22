import { FC } from "react";
import BotComponent from "../BotComponent";
import TelegramIcon from "./TelegramIcon";
import TelegramLogin from "./TelegramLogin";

type Props = {
  initialState: boolean;
  handleChecked: (checked: boolean) => void;
};

const Telegram: FC<Props> = ({ initialState, handleChecked }) => {
  return (
    <BotComponent
      Icon={TelegramIcon}
      initialState={initialState}
      handleChecked={handleChecked}
      title="Telegram"
      subText="Link your telegram account"
    >
      <div className="ml-2">
        <TelegramLogin />
      </div>
    </BotComponent>
  );
};

export default Telegram;
