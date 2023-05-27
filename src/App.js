import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  const [subject, setSubject] = useState([
    "남자 코드 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  const [number, setNumber] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const date = new Date();

  const change = () => {
    let copy = [...subject];
    copy.sort();
    setSubject(copy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={change}>글수정</button>
      {subject.map((a, i) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {subject[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copyNumber = [...number];
                  copyNumber[i] = copyNumber[i] + 1;
                  setNumber(copyNumber);
                }}
              >
                👍
              </span>
              {number[i]}
            </h4>
            <div>2월 17일 발행</div>
            <button
              onClick={() => {
                let copy = [...subject];
                copy.splice(i, 1);
                setSubject(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (inputValue !== "") {
            let copy = [...subject];
            copy.unshift(inputValue);
            setSubject(copy);
            console.log(copy);
          }
        }}
      >
        클릭
      </button>

      {modal === false ? null : (
        <Modal subject={subject} setSubject={setSubject} title={title} />
      )}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.subject[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          const copy = [...props.subject];
          copy[0] = "여자 코트 추천";
          props.setSubject(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
