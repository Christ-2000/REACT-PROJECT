
import React from "react"
import ReactDom from "react-dom/client";
import './index.css'

const firstBook = {
author : "mukesharugamba nina",
title:'job developer',
img :'./image/amzonp1.jpg',
id:1,
}
const secondBook ={
  author:"chistella munezero",
  title:"fullstack",
  img:"./image/amzonp2.jpg",
  id:2,
}
const thirdBook ={
  author:"kiki",
  title:"frontend",
  img:"./image/amzon p.jpg",
  id:3,

}
const fourBook ={
  author:"nene",
  title:"frontend",
  img:"./image/amzonp1.jpg",
  id:3,

}


 function BookList (){
    return<section className = "booklist">
         <Book  
         author={firstBook.author} 
         title= {firstBook.title} 
         img={firstBook.img}>
         <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button class="btn">click me</button>
        </Book>
         <Book  author={secondBook.author} title= {secondBook.title} img={secondBook.img}>
         <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button class="btn">click me</button>
        </Book>
        <Book   author={thirdBook.author} title= {thirdBook.title} img={thirdBook.img}>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
      </p>
      <button class="btn">click me</button>
      </Book>
      <Book   author={fourBook.author} title= {fourBook.title} img={fourBook.img}>
        <h5>hello every one I Like code with my heart</h5>
      </Book>
         </section>
 }

 const names =['john','peter','kiki']





 const img = "./image/amzonp2.jpg"
 const title = "Interesting Facts For Curious Minds"
 const author = "christella MUNEZERO"
// const Book =() =>{
//     return <article className="book">
//         <Image/>
//         <Title/>
//         <Arthor/>
//     </article>
// }
const Book = (props) => {
  const {image,title,author,children,button} =props
    return(
    <article className = "book">
        <img src={props.img} alt ={props.title}/>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
            {children}
            {button}
    </article>
    )
}
   /* const Image = () =>{
    <img
      src="./image/amzonp1.jpg"
      alt='Interesting Facts For Curious Minds'
    />
   };
 const Image= () => <h2>Image One</h2>
const Title =() => <h2 style={{color:'#617D98',marginTop:'2.5rem'}}>Interesting Facts For Curious Minds</h2>
const Arthor =() =><h2>John Doe</h2> */
const root =ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList/>)










// import React from "react"
// import ReactDom from "react-dom/client";
// import './index.css'


//  function BookList (){
//     return<section className = "booklist">
//          <Book job="developer"/>
//          <Book title="rondom"/>
//         <Book/>    
//          </section>
           
//  }
 
// // const Book =() =>{
// //     return <article className="book">
// //         <Image/>
// //         <Title/>
// //         <Arthor/>
// //     </article>
// // }
// const Book =(props) =>{
//     return(
//     <article className = "book">
//         <img src="./image/amzonp2.jpg"/>
//             <h2>Interesting Facts For Curious Minds</h2>
//             <h4>Christella MUNEZERO</h4>
//     </article>
//     )
// }
//    {/* const Image = () =>{
//     <img
//       src="./image/amzonp1.jpg"
//       alt='Interesting Facts For Curious Minds'
//     />
//    };

//  const Image= () => <h2>Image One</h2>
// const Title =() => <h2 style={{color:'#617d98',marginTop:'2.5rem'}}>Interesting Facts For Curious Minds</h2>
// const Arthor =() =><h2>John Doe</h2> */}
   
// const root =ReactDom.createRoot(document.getElementById('root')); 

// root.render(<BookList/>)
