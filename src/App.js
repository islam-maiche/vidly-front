import logo from './logo.svg';
import './App.css';
import {useCallback, useEffect, useState} from "react";

function App() {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);


    // const x = useCallback(() => {
    //     setCounter(percounter => {
    //         console.log(percounter);
    //     })
    // })

    // useEffect(() => {
    //   console.log('update 1 and 2 : ');
    //   // x();
    // }, [counter, counter2]);

    // useEffect(() => {
    //   console.log('update2 : ');
    //   // x();
    // }, [counter2]);

    // useEffect(() => {
    //     console.log(counter, 'kjhedkn');
    //     // x()
    // }, []);

    // setCounter();

    return (
        <main className='container'>
            <h1>Hello world</h1>
            {/*<div>{counter}</div>*/}
            {/*<button onClick={() => {*/}
            {/*    setCounter(counter + 1)*/}
            {/*}}>click here*/}
            {/*</button>*/}
            {/*<div>{counter2}</div>*/}
            {/*<button onClick={() => {*/}
            {/*    setCounter2(counter2 + 2)*/}
            {/*}}>click here 2*/}
            {/*</button>*/}
        </main>
    );
}

export default App;
