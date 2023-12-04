
import React from "react"
import ReactDom from "react-dom/client";
import './index.css'

const firstBook = {

}

 function BookList (){
    return<section className = "booklist">
         <Book  author={author} title= {title} img={img}/>
         <Book  author={author} title= {title} img={img}/>
        <Book   author={author} title= {title} img={img}/>
         </section>
 }
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
    console.log(props)
    return(
    <article className = "book">
        <img src={props.img} alt ={props.title}/>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
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
