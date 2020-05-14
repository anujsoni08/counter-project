export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENTBY5 = "INCREMENTBY5";
export const DECREMENTBY5 = "DECREMENTBY5";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const incrementBy5 = (value) => {
  return {
    type: INCREMENTBY5,
    value: value,
  };
};

export const decrementBy5 = (value) => {
  return {
    type: DECREMENTBY5,
    value: value,
  };
};

export const saveResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res,
  };
};

export const storeResult = (res) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    resultElId: id,
  };
};
