import Item from "../Item/Item";
import { StoreContainerInterface } from "../../store/StoreContainer";
import { Component } from "react";
import { observer } from "mobx-react";

export interface MainInterface {
  store: StoreContainerInterface;
}

@observer
class Main extends Component<MainInterface> {
  constructor(props) {
    super(props);
  }
  render() {
    const { store } = this.props;
    const items = store.ItemStore.items.map((node, idx) => {
      return <Item key={idx} itemElement={node} />;
    });
    return (
      <div className="Main">
        {/* <Item />
                  <Item />
                  <Item /> */}
        {items}
      </div>
    );
  }
}

// const Main = (props: MainInterface) => {
//   const { store } = props;
//   const items = store.ItemStore.items.map(node => {
//     return <Item itemElement={node} />;
//   });
//   return (
//     <div className="Main">
//       {/* <Item />
//       <Item />
//       <Item /> */}
//       {items}
//     </div>
//   );
// };

export default Main;
