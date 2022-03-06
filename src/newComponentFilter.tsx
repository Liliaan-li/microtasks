import React from 'react';
import {FilterType} from './App'
export type ValuesType ={
    banknotes: string
    value: number
    number: string
}
type ArrayType ={
    array: Array<ValuesType>
    onClickHandler: (value: FilterType) => void
}
const NewComponentFilter = (props: ArrayType) => {
    return (
        <div>
            <ul>
                {props.array.map((obj, index) => {
                        return (
                            <li key={index}>
                                <span>{obj.banknotes} </span>
                                <span>{obj.value} </span>
                                <span>{obj.number} </span>
                            </li>
                        )
                    }
                )}
            </ul>
            <button name={'all'} onClick={()=> props.onClickHandler('all')}>all</button>
            <button name={'ruble'} onClick={()=> props.onClickHandler('ruble')}>ruble</button>
            <button name={'dollar'} onClick={()=> props.onClickHandler('dollar')}>dollar</button>
        </div>
    );
};

export default NewComponentFilter;