import axios from "axios";

const API_URL = 'http://localhost:3001';

const startRequest = tweetId => ({
  type: 'START_REQUEST',
  payload: { tweetId },
});

const receiveData = (tweetId, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: { tweetId, error, response },
});

const finishRequest = tweetId => ({
  type: 'FINISH_REQUEST',
  payload: { tweetId },
});

export const fetchTweet = tweetId => {
  return async dispatch => {
    dispatch(startRequest(tweetId));
    try {
      const response = await axios.get(`${API_URL}/tweets/${tweetId}`);
      dispatch(receiveData(tweetId, null, response));
    } catch (error) {
      dispatch(receiveData(tweetId, error));
    }
    dispatch(finishRequest(tweetId));
  }
}