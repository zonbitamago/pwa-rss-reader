import "./DomainIcon.css";

export interface DomainIconInterface {
  alt: string;
  src: string;
}

const DomainIcon = (props: DomainIconInterface) => {
  return (
    <div className="DomainIcon">
      <img alt={props.alt} src={props.src} />
    </div>
  );
};

export default DomainIcon;
