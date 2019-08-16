import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Smurf from './Smurf';

const SmurfList = props => {
console.log("TCL: props", props)
  return (
    <>
      <h1>Check out all these smurfs...</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={15} width={100} />
        ) : (
          'Get Smurf Data'
        )}
      </button>
      {props.smurfs &&
        props.smurfs.map(res => <Smurf key={res.name} smurf={res} />)}
    </>
  );
};

const mapStateToProps = state => {
console.log("TCL: state", state)
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);

