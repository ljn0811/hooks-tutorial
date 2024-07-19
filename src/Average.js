import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중...');
    if(numbers.length === 0 ) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    //컴포넌트가 처음 렌더링될 때만 함수 생성
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    //number 혹은 list가 바뀌었을 때만 함수 생성
    //useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수, 두 번째 파라미터에는 배열
    //어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        //useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킴
        inputEl.current.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b> {avg}
            </div>
        </div>
    );
};

export default Average;