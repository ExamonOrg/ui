import { Sheet } from "react-modal-sheet";
import CloseButton from "react-bootstrap/CloseButton";
import { Col, Container, Row } from "react-bootstrap";

export default function HelpSheet(props) {
  return (
    <Sheet
      isOpen={props.isOpen}
      onClose={() => props.callback()}
      detent="content-height"
    >
      <Sheet.Container>
        <Sheet.Content>
          <Sheet.Scroller>
            <Container>
              <Row style={{"paddingTop": "1em"}}>
                <Col>
                  
                </Col>
                <Col>
                  <h3>Assistance</h3>
                </Col>
                <Col>
                  <CloseButton
                    className="float-end"
                    onClick={() => {
                      props.callback();
                    }}
                  />
                </Col>
              </Row>

              {props.children}
            </Container>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
