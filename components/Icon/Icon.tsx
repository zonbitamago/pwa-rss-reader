import "./Icon.css";

export interface IconInterface {
  children: JSX.Element | JSX.Element[];
}

const Icon = (props: IconInterface) => {
  return <div className="Icon">{props.children}</div>;
};

export default Icon;
