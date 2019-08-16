import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    POST_DATA_START,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE
  } from '../actions';
  
  const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',
    isSuccess: false
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ''
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          smurfs: action.payload,
          error: ''
        };
        case FETCH_DATA_FAILURE:
        return {
          ...state,
          error: action.payload
        };
        case POST_DATA_START:
          return{
              ...state,
              isLoading: true,
              error: null,
              smurfs: {},
              isSuccess: false,
          }
        case POST_DATA_SUCCESS:
          return{
            ...state,
            isLoading: false,
            errors: null,
            smurfs: {},
            isSuccess: true
          }
        case POST_DATA_FAILURE:
          return{
              ...state,
              isLoading: false,
              errors: action.payload,
              smurfs: {},
              isSuccess: false
          }
      default:
        return state;
    }
  };
  