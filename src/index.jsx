import React, { Fragment } from "react";
import ReactDom from "react-dom/client"
import Listitem from "./Listitem";

class App extends React.Component{

    render() {

        let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

        return (
            <Fragment>

                <Listitem array={fruits} />

            </Fragment>
        )
    }
}

var root = document.getElementById("root");
ReactDom.createRoot(root).render(<App />);
