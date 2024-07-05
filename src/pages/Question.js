import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import SyntaxHighlighter from "react-syntax-highlighter";

import styles from "./button.module.css";

export default function Question(props) {
  return (
    <Container>
      <Row>
        <Col>What does the last print statement output?</Col>
        <Col>
          {props.tags.map((tag) => (
            <Badge key={tag} bg="primary" className="float-end">
              {tag}
            </Badge>
          ))}
        </Col>
      </Row>

      <Row>
        <Col>
          <SyntaxHighlighter
            language="python"
            wrapLines={true}
            wrapLongLines={true}
            showLineNumbers={false}
            style={props.codeStyle}
            customStyle={{ "margin-bottom": "0" }}
          >
            {props.code}
          </SyntaxHighlighter>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="btn-group d-flex" role="group">
            <Button
              className={styles.squareButton}
              variant="outline-secondary"
              size="sm"
              title="Too easy"
            >
              😏
            </Button>
            <Button
              className={styles.squareButton}
              variant="outline-secondary"
              size="sm"
              title="I'm stuck"
            >
              😨
            </Button>
            <Button
              className={styles.squareButton}
              variant="outline-secondary"
              size="sm"
              title="I have no idea"
            >
              😱
            </Button>
            <Button
              className={styles.squareButton}
              variant="outline-secondary"
              size="sm"
              title="I give up"
            >
              🤯
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
