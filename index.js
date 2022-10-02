import react, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
  let [question, setquestion] = useState("");
  let [answer, setanswer] = useState("");
  let [history, sethistory] = useState([]);
  let handlechange = (event) => {
    setquestion(event.target.value);
  };
  let display = () => {
    Object.entries(history).map((todo) => {
      return todo.map((item, index) => {
        return <p key={index}>{item}</p>;
      });
    });
  };
  let handlesubmit = (event) => {
    event.preventDefault();
    if (question !== "") {
      setanswer(eval(question));
    }
  };
  let setvalue = (event) => {
    let value = event.target.value;
    if (value == "=") {
      if (question !== "") {
        setanswer(eval(question));
        sethistory((c) => {
          return { ...c, [question]: eval(question) };
        });
      }
    } else if (value == "delete") {
      if (question !== "") {
        setquestion(question.slice(0, question.length - 1));
      }
    } else if (value == "ac") {
      setquestion("");
      setanswer("");
    } else {
      setquestion((c) => c + value);
    }

    console.log(history);
  };
  return (
    <>
      <div className="container">
        <h1>react calculator</h1>
        <Result
          question={question}
          answer={answer}
          handlechange={handlechange}
          handlesubmit={handlesubmit}
        />
        <div className="one">
          <Button value={1} setvalue={setvalue} />
          <Button value={2} setvalue={setvalue} />
          <Button value={3} setvalue={setvalue} />
          <Button value={"delete"} setvalue={setvalue} />
        </div>
        <div className="two">
          <Button value={4} setvalue={setvalue} />
          <Button value={5} setvalue={setvalue} />
          <Button value={6} setvalue={setvalue} />
          <Button value={"ac"} setvalue={setvalue} />
          <Button value={"/"} setvalue={setvalue} />
        </div>
        <div className="three">
          <Button value={7} setvalue={setvalue} />
          <Button value={8} setvalue={setvalue} />
          <Button value={9} setvalue={setvalue} />
          <Button value={"*"} setvalue={setvalue} />
          <Button value={"**"} setvalue={setvalue} />
        </div>
        <div className="four">
          <Button value={"+"} setvalue={setvalue} />
          <Button value={"0"} setvalue={setvalue} />
          <Button value={"-"} setvalue={setvalue} />
          <Button value={"="} setvalue={setvalue} />
        </div>
        <div className="history">
          <h2>hello</h2>
          {Object.entries(history).map((todo) => {
            return todo.map((item, index) => {
              return <li key={index}>{item}</li>;
            });
          })}
        </div>
      </div>
    </>
  );
}

function Button(props) {
  return (
    <>
      <div className="button">
        {" "}
        <input value={props.value} onClick={props.setvalue} type="button" />
      </div>
    </>
  );
}

function Result(props) {
  return (
    <>
      <div className="result">
        <div>
          <form onSubmit={props.handlesubmit}>
            <input
              className="form"
              value={props.question}
              onChange={props.handlechange}
            />
          </form>
        </div>
        <div>
          <input className="form" value={props.answer} onChange={(e) => {}} />
        </div>
      </div>
    </>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
