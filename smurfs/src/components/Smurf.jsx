import React from 'react';

const Smurf = props => {
  return (
    <div>
      <h4>{props.smurf.name}</h4>
      <img src={props.smurf.url} alt={props.smurf.name} />
    </div>
  );
};

export default Smurf;
