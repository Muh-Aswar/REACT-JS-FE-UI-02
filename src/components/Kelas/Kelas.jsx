import React from "react";
import "./Kelas.css";

class Kelas extends React.Component {
  render() {
    return (
      <div>
        <h3 className="warna-kelas">ini kelas {this.props.Kelas}</h3>
        {/* <img src="" alt={this.props.Kelas} /> */}
      </div>
    );
  }
}

export default Kelas;
