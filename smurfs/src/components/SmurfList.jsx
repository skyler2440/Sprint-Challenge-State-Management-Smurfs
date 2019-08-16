import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Smurf from './Smurf';

const SmurfList = props => {
  return (
    <>
      <h1>Title Here</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={15} width={100} />
        ) : (
          'Get Smurf Data'
        )}
      </button>
      {props.smurfs &&
        props.smurfs.map(cam => <Smurf key={cam.name} smurf={cam} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);

