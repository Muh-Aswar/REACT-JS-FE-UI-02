import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Fungsi from "./components/Fungsi";
import Kelas from "./components/Kelas/Kelas";
import NavBar from "./components/NavBar/NavBar";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <NavBar />

    <Fungsi
      fungsi1="fungsi matematika"
      fungsi2="fungsi logika"
      fungsi3="fungsi penjumlahan"
    />
    <Kelas Kelas="pyhton" />
    <img src="./asset/img/python.png" alt="Python.logo" />
    <Kelas Kelas="Css" />
    <img src="./asset/img/react.js" alt="React.logo" />
  </React.StrictMode>,
  rootElement
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Fungsi />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// const element = (
//   <h1 className = "great"> halo ini saya</h1>
// );

// const element2 = React.createElement(
//   'h1',
//   {className: 'great'},'halo ini element ke 2',
// );

// const element3 = {
//   type: 'h1',
//   props: {
//     className: 'great',
//     chilsdren: 'hallo, ini elemen child'
//   }
// };
// ReactDOM.render(
//   Element, document.getElementById('root')
// );
