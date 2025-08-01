const { getChats } = require("@/server/actions/chat");

export const chatintialState = {
  chats: [], // Start with an empty array
  loading: false, // A flag to show a loading indicator in your UI
  error: null, // To hold any potential error messages,
  modelResponding: false,
  messageSending: false,
};

export const chatReducers = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, chats: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_MODEL_RESPONDING":
      return { ...state, modelResponding: action.payload };
    case "SEND_MESSAGE":
      return { ...state, messageSending: action.payload };
    case "CLEAR_CHATS":
      return { ...state, chats: [] };
    default:
      return state;
  }
};
