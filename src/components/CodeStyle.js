import { NavDropdown } from "react-bootstrap";
import { styles } from "../CodeStyles";
export default function CodeStyle(props) {
  return (
    <NavDropdown title="Code Style" id={`offcanvasNavbarDropdown-expand-xl`}>
      {Object.keys(styles).map((style) => {
        return (
          <NavDropdown.Item
            key={style}
            onClick={() => props.setCodeStyle(styles[style])}
          >
            {style}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}
