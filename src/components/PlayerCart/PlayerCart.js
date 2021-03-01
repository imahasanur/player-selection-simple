import React from 'react';
import "./PlayerCart.css";

const PlayerCart = (props) => {

  let playerCart = props.playerCart;
  let totalSalary = props.playerCart.reduce( (total, player)=>player.salary + total,0);
  return (
    <div className="cart sticky-top">
      <h5 className="text-center player-name">Players:{props.playerCart.length}</h5>
      <h6 className="text-center player-name">Players Name</h6>
      {
        playerCart.map(player => {
          return (
            <div>
              <p>{player.name}</p>
              <p>Salary: {player.salary} Tk.</p>
            </div>
          )
        })
      }
      <h6>Total Salary: {totalSalary} Tk.</h6>
    </div>
  );
};

export default PlayerCart;