import { ChangeEvent, FC, PropsWithChildren, useEffect, useState } from "react";

type Props = {
  Icon: FC;
  checkedInitial: boolean;
  initialState: {
    appName?: string;
    envName?: string;
  };
  applications: { name: string; environments: string[] }[];
  handleChecked: (checked: boolean) => void;
  title: string;
  subText?: string;
};

const BotComponent = ({
  Icon,
  checkedInitial,
  applications,
  initialState,
  children,
  handleChecked,
  title,
  subText,
}: PropsWithChildren<Props>) => {
  const [checked, setChecked] = useState<boolean>(checkedInitial);
  const [selectedApplication, setSelectedApplication] = useState<string>(
    initialState?.appName || "",
  );

  const [selectedEnvironment, setSelectedEnvironment] = useState<string>(
    initialState?.envName || "",
  );

  const [environmentNames, setEnvironmentNames] = useState<string[]>([]);

  useEffect(() => {
    handleChecked(checked);
  }, [checked, handleChecked]);

  const handleChange = () => {
    setChecked((state) => {
      return !state;
    });
  };

  const handleApplicationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    const newAppName = event.target.value;

    const environments =
      applications.find((app) => app.name === newAppName)?.environments || [];

    setEnvironmentNames(environments);

    setSelectedApplication(newAppName);
    setSelectedEnvironment("");
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
        <select
          className="select w-full max-w-xs border-white"
          onChange={(event) => handleApplicationChange(event)}
          defaultValue={selectedApplication}
        >
          <option value={undefined}>Select an application</option>

          {applications.map(({ name }) => {
            return (
              <option value={name} key={name}>
                {name}
              </option>
            );
          })}
        </select>
        <select
          className="select ml-2 w-full max-w-xs border-white"
          defaultValue={selectedEnvironment}
        >
          <option value={undefined}>Select an environment</option>

          {environmentNames.map((envName) => {
            return (
              <option value={envName} key={envName}>
                {envName}
              </option>
            );
          })}
        </select>
        <input
          type="checkbox"
          className="toggle ml-2"
          checked={checked}
          onChange={() => handleChange()}
        />
        <div className="ml-2 w-56">{children ? children : null}</div>
      </div>
    </div>
  );
};

export default BotComponent;
