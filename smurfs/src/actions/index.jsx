import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
      console.log("TCL: getData -> res", res)
        // res.data.data
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      });
  };
};
export const postData = newSmurf => {
    return dispatch => {
        dispatch({ type: POST_DATA_START });
        axios
          .post('http://localhost:3333/smurfs', newSmurf)
          .then(res => {
              dispatch({ type: POST_DATA_SUCCESS, payload: {message: 'New smurf added successfully'}})
              console.log('post data result', res)
          })
          .catch(err =>{
              dispatch({ type: POST_DATA_FAILURE, payload: err})
              console.log('post data error', err)
          })
    }
}