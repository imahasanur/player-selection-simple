import React, { useEffect, useState } from 'react';
import './Players.css';
import fakeData from '../../fakeData/index';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import PlayerCart from '../PlayerCart/PlayerCart';

const Players = () => {
    const [players , setPlayers] = useState([]);
    useEffect(()=>{
      let newPlayers = [...players, ...fakeData ];
      setPlayers(newPlayers);

    },[]);

    const [playerCart, setPlayerCart] = useState([]);
    const handleSelection = (player) =>{
      const newPlayer = [...playerCart, player];
      setPlayerCart(newPlayer);
    }
  return (
    <div className="players">
      <div className="player-detail row container-fluid">
        {
          players.map( player => <PlayerDetails player={player} handleSelection={handleSelection}></PlayerDetails>) 
        }
      </div>
      <div className="player-cart">
        <PlayerCart playerCart = {playerCart}></PlayerCart>
      </div>    
    </div>
  );
};

export default Players;