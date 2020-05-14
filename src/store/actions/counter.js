import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const incrementBy5 = (value) => {
  return {
    type: actionTypes.INCREMENTBY5,
    value: value,
  };
};

export const decrementBy5 = (value) => {
  return {
    type: actionTypes.DECREMENTBY5,
    value: value,
  };
};