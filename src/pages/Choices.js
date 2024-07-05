import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Choices(props) {
  return (
    <Container style={{ "padding-top": "1em" }}>
      <Row>
        <Col>
          <div className="d-grid gap-2">
            {props.choices.map((choice) => (
              <Button
                key={choice}
                value={choice}
                variant="primary"
                size="lg"
                onClick={props.handleClick}
              >
                {choice}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
