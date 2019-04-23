import "./Item.css";
import Divider from "@material-ui/core/Divider";
import DomainIcon from "../DomainIcon/DomainIcon";
import dayjs from "dayjs";
import { ItemElementInterface } from "../../store/ItemStore";

export interface ItemInterface {
  itemElement: ItemElementInterface;
}

const Item = (props: ItemInterface) => {
  const alt = props.itemElement.alt;
  const src = props.itemElement.src;
  const domainName = props.itemElement.domainName;
  const date = props.itemElement.date;
  const url = props.itemElement.url;
  const itemName = props.itemElement.itemName;
  return (
    <div className="Item">
      <div className="container">
        <div className="left">
          <DomainIcon alt={alt} src={src} />
        </div>
        <div className="top">
          <h5 className="domainName">{domainName}</h5>
          <h6 className="date">{date}</h6>
        </div>
        <div className="bottom">
          <a href={url}>{itemName}</a>
        </div>
      </div>
      <Divider className="divider" />
    </div>
  );
};

export default Item;
