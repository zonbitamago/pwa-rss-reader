import "./Item.css";
import Divider from "@material-ui/core/Divider";

const Item = () => {
  return (
    <div className="Item">
      <div className="container">
        <div className="left">Left</div>
        <div className="top">
          <h5 className="domainName">DomainName</h5>
          <h6 className="date">date</h6>
        </div>
        <div className="bottom">
          <a
            href="javascript:void(0);"
            onClick={() => {
              console.log("click!");
            }}
          >
            itemName
          </a>
        </div>
      </div>
      <Divider className="divider" />
    </div>
  );
};

export default Item;
