import React from 'react';
type ChanelType ={
    name: string
    callBack:()=> void
}
export const Button = (props:ChanelType) => {
    const onClickHandler = () =>{
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

