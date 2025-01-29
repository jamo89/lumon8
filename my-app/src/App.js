import React from "react";
import './App.css';

function App() {
    const [toggle, setToggle] = React.useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    React.useEffect(() => {
        document.title = toggle ? "Welcome to lil Lumon" : "Using the useEffect hook"
    }, [toggle]);

    return (
        <div>
            <h1>Using the useEffect hook</h1>
            <button onClick={clickHandler}>
                Toggle message
            </button>
            {toggle && <h2>Welcome to lil Lumon</h2>}
        </div>
    )
}

export default App;