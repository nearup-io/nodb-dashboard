import { FC } from "react";
import whatsapp from "../../../../../icons/whatsapp.svg";

const WhatsappIcon: FC = () => {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-md border border-accent bg-zinc-700">
      <img src={whatsapp} alt="" width="24px" height="24px" />
    </div>
  );
};

export default WhatsappIcon;
