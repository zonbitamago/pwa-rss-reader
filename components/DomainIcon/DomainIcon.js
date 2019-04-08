import "./DomainIcon.css";
const DomainIcon = props => {
  return (
    <div className="DomainIcon">
      <img alt={props.alt} src={props.src} />
    </div>
  );
};

export default DomainIcon;
