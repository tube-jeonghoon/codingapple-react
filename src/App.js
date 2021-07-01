import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, chTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 강의",
  ]);
  let [good, chGood] = useState(0);
  let [modal, chModal] = useState(true);
  let [inputNumber, chInputNumber] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {title.map(function (title, i) {
        return (
          <div className="list">
            <h3
              onClick={() => {
                chInputNumber(i);
              }}
            >
              {title}
              <span
                onClick={() => {
                  chGood(good + 1);
                }}
              >
                👍
              </span>
              {good}
            </h3>
            <p>6월 29일 발행</p>
            <hr />
          </div>
        );
      })}

      {modal === true ? (
        <Modal title={title} inputNumber={inputNumber} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.inputNumber]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
