// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; 
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);







// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// import React, { createElement } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import Football from './Component.js';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Contact from "./pages/contact";
// // import reportWebVitals from './reportWebVitals';


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


// const myFirstElement = <h1>Hello React!<br /></h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);


// // const hw = <h1>Hello World</h1>
// // const toot = ReactDOM.createRoot(document.getElementById('toot'));
// // toot.render(hw);


// // let my = <h1><i>Let's Start Developing with React</i></h1>
// // let name = ReactDOM.createRoot(document.getElementById('container'));
// // name.render(my)


// // let car = ReactDOM.createRoot(document.getElementById('car'));
// // car.render(<Car color="red" />)


// // function Dar(props) {
// //   return <h2>I am a {props.color} Car!</h2>;
// // }


// // const btn = ReactDOM.createRoot(document.getElementById('btn'));
// // btn.render(<Shoot />);


// // function Football() {
// //   const shoot = () => {
// //     alert("Great Shot!");
// //   }

// //   return (
// //     <button onClick={shoot} >Take the shot!</button>
// //   );
// // }

// // const btn = ReactDOM.createRoot(document.getElementById('btn'));
// // btn.render(<Football />)




// // const rot = ReactDOM.createRoot(document.getElementById('rot'));
// // rot.render(<App />);