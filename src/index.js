import React from "react"
import ReactDom from "react-dom/client";

function Greeting (){
    return(
    <div>(<h2>My First Component</h2>
    <h3>My second Component</h3>
    </div>

    )
}

const root =ReactDom.createRoot(document.getElementById('root'));

root.render(<Greeting/>)
