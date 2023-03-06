/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);

  let [따봉, 따봉변경] = useState(0);

  let [modal, setModal] = useState(false);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>
          {글제목[0]} <span onClick={() => 따봉변경(따봉 + 1)}>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => setModal(!modal)}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {modal == true ? <Modal /> : null}

      {/* 
        동적인 UI 만드는 step
        1.html css로 미리 디자인완성
        2.UI의 현재 상태를 state로 저장
        3.state에 따라 UI가 어떻게 보일지 작성
       */}
    </div>
  );
}

// 컴포넌트 만드는 법
// 1.function 만들고 // 2. return 안에 html 담기 // 3. <함수명></함수명> 쓰기
// 다른 function 밖에 만들기 & 첫 글자는 대문자

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

const Modal2 = () => {
  return <></>;
};

// 컴포넌트 사용이유
// 1.반복적인 html 축약
// 2.큰 페이지들
// 3.자주 변경되는 것들

export default App;
