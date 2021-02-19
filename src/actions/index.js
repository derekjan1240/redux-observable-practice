export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const resetCounter = () => {
  return {
    type: "RESET",
  };
};

//---
export const ping = () => {
  return {
    type: "PING",
  };
};

export const pong = () => {
  return {
    type: "PONG",
  };
};
//---
export const fetchUser = (username) => ({
  type: "FETCH_USER",
  payload: username,
});

export const fetchUserFulfilled = (payload) => ({
  type: "FETCH_USER_FULFILLED",
  payload,
});

export const fetchUserCancelled = () => ({
  type: "FETCH_USER_CANCELLED",
});

export const fetchUserRejected = (payload) => ({
  type: "FETCH_USER_REJECTED",
  payload,
});

export const resetCurrentUser = () => ({
  type: "RESET_CURRENT_USER",
});
