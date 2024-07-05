import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import OffCanvasNavigationBar from "./components/NavigationBar";
import HelpSheet from "./components/HelpSheet";
import Question from "./pages/Question";
import Choices from "./pages/Choices";
import Concepts from "./pages/help/concepts";
import CodeAs from "./pages/help/CodeAs";
import NextPrevQuestion from "./pages/NextPrevQuestion";
import CodeStyle from "./components/CodeStyle";
import Hints from "./pages/help/Hints";
import FloatingButton from "./components/FloatingButton";

import { styles } from "./CodeStyles";

function App() {
  const [questionBank, setQuestionBank] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [index, setIndex] = useState(0);
  const [codeStyle, setCodeStyle] = useState(styles["pojoaque"]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/data2.json")
      .then((response) => response.json())
      .then((data) => {
        setQuestionBank(data);
        setCurrentQuestion(data[0]);
      });
  }, []);

  function handleClick(event) {
    const choice = event.target.value;
    if (choice === currentQuestion.correct_answer) {
      handleNext();
    } else {
      handleNext();
    }
  }

  function handleNext() {
    if (index === questionBank.length - 1) {
      return;
    }
    setIndex(index + 1);
    setCurrentQuestion(questionBank[index]);
    console.log(currentQuestion.hints);
  }

  function handlePrevious() {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
    setCurrentQuestion(questionBank[index]);
  }

  function helpMe() {
    setIsOpen(true);
  }

  return (
    <div className="App">
      <Container style={{ maxWidth: "460px" }}>
        <OffCanvasNavigationBar>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {/* <h2>Question: {currentQuestion && currentQuestion.unique_id}</h2> */}
            <CodeStyle setCodeStyle={setCodeStyle} />
            <NextPrevQuestion
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          </Nav>
        </OffCanvasNavigationBar>
        {currentQuestion && (
          <>
            <Question
              tags={currentQuestion.tags}
              code={currentQuestion.function_src}
              codeStyle={codeStyle}
            />
            <Choices
              choices={currentQuestion.choices}
              handleClick={handleClick}
            />
            <HelpSheet isOpen={isOpen} callback={() => setIsOpen(false)}>
              {/* <Concepts /> */}
              <CodeAs
                language="javascript"
                codeStyle={codeStyle}
                code={currentQuestion.alternativeLanguage}
              />
              <Hints
                hints={currentQuestion.hints}
              />
            </HelpSheet>
          </>
        )}
        <FloatingButton onClick={helpMe} />
      </Container>
    </div>
  );
}

export default App;
