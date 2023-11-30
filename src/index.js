import React from "react"
import ReactDom from "react-dom/client";
function Greeting (){
    return(
        <div>
        <Person/>
        <Message/>
        </div>
    )
}
const Person = () => <h2>cloude nyandwi</h2>
const Message =() => {
    return(
        <div>
            (<h2>My First Component</h2>
    <h3>My second Component</h3>
            <h2>kelly nyandwi</h2>
            <h2>raul nyandwi</h2>
        </div>
    )

}
    

    


const root =ReactDom.createRoot(document.getElementById('root'));

root.render(<Greeting/>)
