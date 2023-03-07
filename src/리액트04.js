import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(글제목.map(() => 0));
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

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

      {modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title} /> : null}
      {/* 
        부모 component에서 자식 component에 데이터를 전송하는 방법
        1. <자식컴포넌트 작명={state이름}
        2. 자식컴포넌트에서 props 파라미터 등록 후 {props.작명} 사용 
          (props는 아무렇게 작명해도 됨)
        * props 전송은 부모 > 자식만 가능
        * 변수 함수 등등 어떤 것들도 다 전송가능
       */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
