import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
    return ( <
        HashRouter >
        <
        div >
        <
        Routes >
        <
        Route path = "/"
        element = { < Kanbas / > }
        /> <
        /Routes> <
        /div> <
        /HashRouter>
    );
}
export default App;