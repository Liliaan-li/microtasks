import  React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from "./NewComponent";
import {MouseEvent} from 'react'
import {Button} from "./Button";
import NewComponentFilter from "./newComponentFilter";


//Map
// export const topCars = [
//   {manufacturer:'BMW', model:'m5cs'},
//   {manufacturer:'Mercedes', model:'e63s'},
//   {manufacturer:'Audi', model:'rs6'}
// ]
export type FilterType = 'all' | 'ruble' | 'dollar';
function App() {
    //Button
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //   console.log("Hi, I'm Kolya")
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //   console.log("Hi, I'm Vika")
    // }
    // const onClickHandler = (name:string) =>{
    //   console.log(name)
    // }
    // const foo1 = () => {
    // console.log("hi looser")
    // }
    // const foo2 = (number: number) => {
    //   console.log(number)
    // }
    // const Button1Foo = (subscriber: string, age: number) =>{
    //   console.log(subscriber, age)
    // }
    // const Button2Foo = (subscriber: string, age: number) =>{
    //   console.log(subscriber, age)
    // }
    // const Output = () =>{
    //   console.log("I'm a stupid button")
    // }

    //useState
    // let[a, setA]= useState(1);
    // const onClickHandler = () =>{
    //   setA(++a);
    //   console.log(a);
    // }
    // const onClickHandler2 = () =>{
    //   setA(0);
    //   console.log(a);
    // }

    //filter

    const [money, setMoney] = useState([
        {banknotes: 'dollar', value: 100, number: ' a1234567890'},
        {banknotes: 'dollar', value: 50, number: ' z1234567890'},
        {banknotes: 'ruble', value: 100, number: ' w1234567890'},
        {banknotes: 'dollar', value: 100, number: ' e1234567890'},
        {banknotes: 'dollar', value: 50, number: ' c1234567890'},
        {banknotes: 'ruble', value: 100, number: ' r1234567890'},
        {banknotes: 'dollar ', value: 50, number: ' x1234567890'},
        {banknotes: 'ruble', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('all')
    let currentMoney = money;
    if(filter ==="ruble"){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'ruble');
    }
    if(filter ==="dollar"){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'dollar');
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)

    }
    return (
        <div className="App">

            {/*Map  */}
            {/*<NewComponent cars={topCars}/>*/}

            {/*Button  */}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>) =>onClickHandler('o')}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler('k')}>MyYouTubeChanel-2</button>*/}
            {/*  <button onClick={foo1}>1</button>*/}
            {/*  <button onClick={(event)=> foo2(100200)}>2</button>*/}
            {/*<Button name={"MyChanel1"} callBack={()=>Button1Foo ("Hi Vasya", 21)}/>*/}
            {/*<Button name={"MyChanel2"} callBack={()=>Button2Foo("Hi Nata", 35)}/>*/}
            {/*<Button name={"I'm a stupid button"} callBack={Output}/>*/}

            {/*useState*/}
            {/* <h1>{a}</h1>*/}
            {/*  <button onClick={onClickHandler}>number</button>*/}
            {/*  <button onClick={onClickHandler2}>0</button>*/}

            {/*filter*/}
            <NewComponentFilter array={currentMoney} onClickHandler={onClickFilterHandler}/>

        </div>
    );
}

export default App;
