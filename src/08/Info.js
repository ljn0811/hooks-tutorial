import { useState, useEffect} from 'react';
//useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정
//클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태

const Info = () => {
    //하나의 useState 함수는 하나의 상태 값만 관리 가능
    //컴포넌트에서 관리할 상태가 여러 개라면 useState를 여러 번 사용
    const [ name, setName ] = useState('');
    const [ nickName, setNickname ] = useState('');

    //useEffect는 기본적으로 렌더링되고 난 직후마다 실행
    //두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라짐

    //useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고 업데이트될 때는 실행하지 않으려면 
    //함수의 두 번째 파라미터로 비어 있는 배열 입력
    // useEffect(() => {
    //     console.log('마운트될 때만 실행됩니다.');
    // }, []);

    //특정 값이 변경될 때만 호출하고 싶을 경우 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값 입력
    // useEffect(() => {
    //     console.log(name);
    // }, [name]);

    //컴포넌트가 언마운트되기 전이나 업데이트되기 직전 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수 반환
    // useEffect(() => {
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     };
    // }, [name]);

    //언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두 번째 파라미터에 비어있는 배열을 입력
    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('unmount');
        }
    }, [])

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickName}
                </div>
            </div>
        </div>
    )
}

export default Info;