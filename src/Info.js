// import React, { useReducer } from 'react';
import useInputs from './useInput';

function reducer(state, action){
    return {
        ...state,
        [action.name] : action.value
    };
}

const Info = () => {
    const [state, onChange] = useInputs({
        name : '',
        nickName : ''
    });


    // const [state, dispatch] = useReducer(reducer, {
    //     name : '',
    //     nickname : ''
    // });

    const { name, nickName} = state;
    // const onChange = e => {
    //     dispatch(e.target);
    // };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickName" value={nickName} onChange={onChange} />
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
    );
};

export default Info;