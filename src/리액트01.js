/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집'; // 자료 잠깐 저장할 땐 변수
  // 리액트에선 state로도 자료를 저장 할 수 있음
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  // Destructuring 문법 (es6 문법)
  // useState는 Array인데 내부의 자료는 [useState(이거), 저거바꾸는함수] 이다.
  // 변수와 state의 차이는 변수의 변경은 html에 자동 반영이 안됨, state는 변경하면 html이 자동 재렌더링됨
  // 자주 변경될거같은 html 부분은 state로 만들어놓기

  let [따봉, 따봉변경] = useState(0);

  return (
    // JS안에서 html을 사용 할 수 있게하는 JSX라는 문법임
    // JSX에서 데이터바인딩은 {중괄호}
    // JSX에서 inline style은 style={{ color: 'red' }}
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>
          {글제목[0]} <span onClick={() => 따봉변경(따봉 + 1)}>👍</span> {따봉}
          {/* onClick에는 클릭했을때 실행할 함수를 넣는다 */}
          {/* state를 변경하려면 state변경함수(새로운state) */}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button
        onClick={() => {
          // 글제목[0] = '여자코트 추천';
          // 글제목변경(글제목);
          // 이거 안되는 이유 👇

          // state 변경함수의 특징
          // 기존state == 신규state의 경우 변경안해줌
          // array/object 특징
          // let arr = [1,2,3] 이라는 array를 만들었을때 [1,2,3]은 메모리에 저장되고 변수 arr에는 그 메모리의 주소만 저장된다
          // 고로 글제목[0] = '여자코트 추천'; 를 했을때 array의 값은 변경되었지만
          // 글제목변경(글제목); 을 했을때 (글제목)은 그저 주소값이기 때문에 변경이 안되었다고 판단해서 state변경함수가 변경하지 않음

          // 그래서 array와 object는 shellow copy를 만들어서 변경해야함
          // let copy = 글제목;
          // 이렇게 하면 안됨
          // copy에 글제목의 주소가 복사 된거라서 똑같이 변경함수가 변경안해줌 ㅇㅇ shellow copy아님
          let copy = [...글제목];
          // 이렇게 해야함
          // [...글제목]은 글제목 array를 분해해서 다시 array를 새로 만듬 (새 메모리에 저장) 이게 shellow copy임
          // 그리고 copy는 새로운 메모리에 저장된 array의 주소값을 가지고 있음 고로 copy와 글제목은 같지않음

          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}>
        제목변경
      </button>
      <button
        onClick={() => {
          let copy2 = [...글제목.sort()];
          console.log(copy2);
          console.log(copy2 == 글제목);

          글제목변경(copy2);
        }}>
        가나다순정렬
      </button>
    </div>
  );
}

export default App;
