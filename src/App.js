import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import SyntaxHighlighter from "react-syntax-highlighter";
import { styles } from "./CodeStyles";

import NavigationBar from "./components/NavigationBar";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  const [code, setCode] = useState(null);
  const [tags, setTags] = useState([]);
  const [choices, setChoices] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [codeStyle, setCodeStyle] = useState(styles["pojoaque"]);




  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setCode(data[index].function_src);
        setTags(data[index].tags);
        setChoices(data[index].choices);
        setAnswer(data[index].correct_answer);
      });
  }, []);

  function handleClick(event) {
    const choice = event.target.value;
    if (choice === answer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  }

  function handleNext() {
    setIndex(index + 1);
    setCode(data[index].function_src);
    setTags(data[index].tags);
    setChoices(data[index].choices);
    setAnswer(data[index].correct_answer);
  }

  function handlePrevious() {
    setIndex(index - 1);
    setCode(data[index].function_src);
    setTags(data[index].tags);
    setChoices(data[index].choices);
    setAnswer(data[index].correct_answer);
  }

  function tooHard() {
    handleNext();
  }
  function helpMe() {}

  return (
    <div className="App">
      <Container style={{ maxWidth: "460px" }}>
        <NavigationBar>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavDropdown
              title="Code Style"
              id={`offcanvasNavbarDropdown-expand-xl`}
            >
              {
                Object.keys(styles).map(k => {
                  return <NavDropdown.Item key={k} onClick={() => setCodeStyle(styles[k])}>
                    {k}
                  </NavDropdown.Item>
                })
              }
            </NavDropdown>
            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-secondary" size="sm" onClick={handlePrevious}>
                Previous
              </Button>
              <Button variant="outline-secondary" size="sm" onClick={handleNext}>
                Next
              </Button>
            </ButtonGroup>
          </Nav>
        </NavigationBar>

        <Row>
          <Col>What does the last print statement output?</Col>
          <Col>
            {tags.map((tag) => (
              <Badge key={tag} bg="primary">{tag}</Badge>
            ))}
          </Col>
        </Row>

        <Row>
          <Col>
            <SyntaxHighlighter language="python" wrapLines={true} style={codeStyle}>
              {code}
            </SyntaxHighlighter>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button variant="secondary" size="lg" onClick={helpMe}>
                Assist Me
              </Button>
              {choices.map((choice) => (
                <Button
                  key={choice}
                  value={choice}
                  variant="primary"
                  size="lg"
                  onClick={handleClick}
                >
                  {choice}
                </Button>
              ))}
              <Button variant="danger" size="lg" onClick={tooHard}>
                Too Hard
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
          

            
          </Col>
          <Col>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
