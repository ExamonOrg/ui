import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Question(props) {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={props.handlePrevious}
      >
        Previous
      </Button>
      <Button variant="outline-secondary" size="sm" onClick={props.handleNext}>
        Next
      </Button>
    </ButtonGroup>
  );
}
