import axios from "axios";

const API_URL = 'http://localhost:3001/tweets';

const startRequest = () => ({
  type: 'START_REQUEST',
});

const receiveData = (error, response) => ({
  type: 'RECEIVE_DATA',
  payload: { response }
});

const finishRequest = () => ({
  type: 'FINISH_REQUEST',
});

export const fetchTweets = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const response = await axios.get(API_URL);
      console.log(response);
      dispatch(receiveData(null, response));
    } catch (error) {
      dispatch(receiveData(error));
    }
    dispatch(finishRequest());
  }
}