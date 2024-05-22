import { FC, PropsWithChildren, useEffect, useState } from "react";

type Props = {
  Icon: FC;
  initialState: boolean;
  handleChecked: (checked: boolean) => void;
  title: string;
  subText?: string;
};

const BotComponent = ({
  Icon,
  initialState,
  children,
  handleChecked,
  title,
  subText,
}: PropsWithChildren<Props>) => {
  const [checked, setChecked] = useState<boolean>(initialState);

  useEffect(() => {
    handleChecked(checked);
  }, [checked, handleChecked]);

  const handleChange = () => {
    setChecked((state) => {
      return !state;
    });
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <Icon />
        <div className="flex flex-col pl-2.5">
          <span className="text-left text-base">{title}</span>
          {subText ? (
            <span className="text-left text-xs">{subText}</span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <input
          type="checkbox"
          className="toggle"
          checked={checked}
          onChange={() => handleChange()}
        />
        {checked ? children : null}
      </div>
    </div>
  );
};

export default BotComponent;
