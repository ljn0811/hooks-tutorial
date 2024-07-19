import React, { useState } from 'react';

const Counter = () => {
    //useState의 파라미터에 상태의 기본값 입력
    //카운터의 기본값을 0으로 설정
    //이 함수 호출 시 배열 반환
    //배열의 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수
    //이 함수에 파라미터를 넣어 호출하면 전달받은 파라미터로 값이 변경되고, 컴포넌트가 정상적으로 리렌더링
    const [ value, setValue ] = useState(0);
    
    return (
        <div>
            <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
            <button onClick={()=>setValue(value+1)}>+1</button>
            <button onClick={()=>setValue(value-1)}>-1</button>
        </div>
    )
}

export default Counter;