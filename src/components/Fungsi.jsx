import React from "react";
import "./Fungsi.css";
function Fungsi(props) {
  return (
    <div>
      <ul className="warna">
        <li> {props.fungsi1}</li>
        <li> {props.fungsi2}</li>
        <li> {props.fungsi3}</li>
      </ul>
    </div>
  );
}

export default Fungsi;
