import React from 'react';

const Smurf = props => {
  return (
    <div className='smurf-data'>
      <h2>This smurf's name is {props.smurf.name}</h2>
      <h3>{props.smurf.name} is {props.smurf.age} "smurf years old" and is {props.smurf.height} tall.</h3>
      </div>
  );
};

export default Smurf;
