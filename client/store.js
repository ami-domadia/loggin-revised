import {createStore, applyMiddleware, combineReducers} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios';

const SET_USER = 'SET_USER';

function setUser(user){
  return {
    type: SET_USER,
    user
  }
}
const userReducer = (state = {user: {} }, action) => {
  switch(action.type){
    case SET_USER: return {...state, user: action.user}
  }
  return state;
}

const reducer = combineReducers({
  user: userReducer
});

export const loginThunk = (user) => dispatch => {
  return axios.post('/auth/', user)
              .then((res)=>res.data)
              .then((user)=>dispatch(setUser(user)));
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
