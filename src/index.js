import React from "react"
import ReactDom from "react-dom/client";
import './index.css'

function BookList (){
    return<section className = "booklist">
        <Book/>
        <Book/>
        <Book/>
    </section>
           
}
const Book =() =>{
    return <article className="book">
        <Image/>
        <Title/>
        <Arthor/>
    </article>
}
const Image = () => (
    <img
      src="./image/amzonp1.jpg"
      alt='Interesting Facts For Curious Minds'
    />
  );

// const Image= () => <h2>Image One</h2>
const Title =() => <h2 style={{color:'#617d98',marginTop:'2.5rem'}}>Interesting Facts For Curious Minds</h2>
const Arthor =() =><h2>John Doe</h2>
   
const root =ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList/>)
