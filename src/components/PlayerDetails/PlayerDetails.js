import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PlayerDetails.css';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const PlayerDetails = (props) => {
  const {name, role, salary, position, img} = props.player;

  return (
    <div className="col-8 col-sm-5 col-md-4 my-2 ">
      <div className="card shadow-lg mb-3 bg-white rounded" style={{border:'2px solid green'}}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body" style={{background:'green', color:'black'}}>
          <p>Name: {name}</p>
          <p>Role: {role}</p>
          <p>Position: {position}</p>
          <h6>Salary: {salary} Tk.</h6>
          <button 
            onClick = { ()=>props.handleSelection(props.player)}
            className="btn btn-success">
            <FontAwesomeIcon icon={faPlusCircle} />
             Select Player</button>
        </div>
      </div>
          
    </div>
  );
};

export default PlayerDetails;