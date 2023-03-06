/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(글제목.map(() => 0));
  let [modal, setModal] = useState(false);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4 onClick={() => setModal(!modal)}>
              {글제목[i]}
              <span
                onClick={() => {
                  let 따봉카피 = [...따봉];
                  따봉카피[i] += 1;
                  따봉변경(따봉카피);
                  console.log(따봉카피);
                }}>
                👍
              </span>{' '}
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
