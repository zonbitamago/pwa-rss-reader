import "./Item.css";
import Divider from "@material-ui/core/Divider";
import DomainIcon from "../DomainIcon/DomainIcon";
import dayjs from "dayjs";

const Item = () => {
  const alt = "alt";
  const src = "https://www.google.com/s2/favicons?domain=qiita.com";
  const domainName = "Qiita";
  const date = dayjs().format("YYYY/MM/DD HH:mm:ss");
  const url = "https://qiita.com/zonbitamago/items/4e215e305062dde016bb";
  const itemName = "無料で爆速なWebアプリケーションを作ろう！";
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
