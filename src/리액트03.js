/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  console.log(따봉);

  // map 함수
  // 1. array 자료 갯수만큼 함수안의 코드 실행해줌
  // 2. 함수의 파라미터는 array안에 있던 자료임
  // 3. return에 뭐 적으면 array로 담아줌

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {/* <div className='list'>
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
      </div> */}

      {/* \
      {[1, 2, 3].map(function () {
        return <div>안녕</div>;
      })}
     
        1. map 쓰고나면 그 자리에 array 남음 [<div>안녕</div>,<div>안녕</div>,<div>안녕</div>]
        2. 리액트는 array안에 html 담아놔도 잘 보여줌
      */}

      {글제목.map(function (a, i) {
        return (
          <div className='list' key={i}>
            {/* 반복문으로 html 생성하면 key={html마다 다른 값} 추가해야함 */}
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

      {/* 
        map 함수의 파라미터는 반복할때 마다의 자료,
        반복문 돌 때 마다 0부터 1씩 증가하는 정수 
      */}

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

const Modal2 = () => {
  return <></>;
};

export default App;
