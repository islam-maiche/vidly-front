import logo from "./logo.svg";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Movies from "./components/movies";

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

    useEffect(() => {
        document.title = "Vidly App";
    }, []);

    return (
        <main className="container">
            <Movies />
        </main>
    );
}

export default App;
