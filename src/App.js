import './App.css';
import { useState, React, Component } from 'react';
import { render } from '@testing-library/react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(글제목.map(() => 0));
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}>
              {글제목[i]}
              <span
                onClick={(e) => {
                  // 이벤트버블링 막기
                  e.stopPropagation();

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
            <button
              onClick={() => {
                let copy = [...글제목];
                let copy2 = [...따봉];
                copy.splice(i, 1);
                copy2.splice(i, 1);
                글제목변경(copy);
                따봉변경(copy2);
                setModal(false);
              }}>
              삭제
            </button>
          </div>
        );
      })}

      <form>
        <input
          type='text'
          onInput={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          type='button'
          onClick={() => {
            let copy = [...글제목];
            copy.unshift(입력값);
            let copy따봉 = [...따봉];
            copy따봉.unshift(0);
            따봉변경(copy따봉);
            setModal(false);
            return 입력값.trim() !== '' ? 글제목변경(copy) : null;
          }}>
          글생성
        </button>
      </form>

      {modal == true ? <Modal 글제목={글제목} title={title} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
