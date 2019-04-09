import "./Button.css";
import MaterialButton from "@material-ui/core/Button";
const Button = props => {
  const StyleYes = {
    background: "#03A9F4",
    color: "white",
    borderRadius: "5px"
  };

  const StyleNo = {
    background: "#FF1744",
    color: "white",
    borderRadius: "5px"
  };

  if (props.type == "yes") {
    return (
      <div className="Button">
        <MaterialButton
          id="yes"
          onClick={props.handleClick}
          variant="contained"
          style={StyleYes}
        >
          Yes
        </MaterialButton>
      </div>
    );
  } else if (props.type == "no") {
    return (
      <div className="Button">
        <MaterialButton
          id="no"
          onClick={props.handleClick}
          variant="contained"
          style={StyleNo}
        >
          No
        </MaterialButton>
      </div>
    );
  }
};
export default Button;
