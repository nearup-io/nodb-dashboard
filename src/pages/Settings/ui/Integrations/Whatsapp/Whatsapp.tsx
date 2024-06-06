import { FC } from "react";
import BotComponent from "../BotComponent";
import WhatsappIcon from "./WhatsappIcon";

type Props = {
  initialState: boolean;
  handleChecked: (checked: boolean) => void;
};

const Telegram: FC<Props> = ({ initialState, handleChecked }) => {
  return (
    <BotComponent
      Icon={WhatsappIcon}
      initialState={initialState}
      handleChecked={handleChecked}
      title="Whatsapp"
      subText="Link your whatsapp account"
    ></BotComponent>
  );
};

export default Telegram;
