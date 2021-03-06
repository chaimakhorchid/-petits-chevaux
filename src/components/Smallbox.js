import React from "react"
import Circle from "./Circle";

import yellow from "../img/horseYellow.svg"
import green from "../img/horseGreen.svg"
import red from "../img/horseRed.svg"
import blue from "../img/horseBlue.svg"

class SmallBox extends React.Component {
  render() {
    const { positionActuelle1, positionActuelle2, positionActuelle3, positionActuelle4, column, color, id } = this.props
    return (
      <div
        style={{
          gridColumn: `${column}`,
          width: "50px",
          height: "50px",
          backgroundColor: `${color}`,
          padding: "10px",
          border: "1px solid black",
          id: `${id}`,
        }}
      >
        {/* // {Number(id) === positionActuelle && <Circle counter ={this.props.joueur}/>} */}
        {Number(id) === positionActuelle1 && <Circle player={yellow} />}
        {Number(id) === positionActuelle2 && <Circle player={green} />}
        {Number(id) === positionActuelle3 && <Circle player={red} />}
        {Number(id) === positionActuelle4 && <Circle player={blue} />}
      </div>
    )
  }
}
export default SmallBox;
