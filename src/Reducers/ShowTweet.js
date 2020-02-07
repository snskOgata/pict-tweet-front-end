const initialState = {
  tweetId: undefined,
  title: undefined,
  image: undefined,
  content: undefined,
  userId: undefined,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return {
        tweetId: action.payload.tweetId,
        tweet: undefined,
        error: false
      };

    case 'RECEIVE_DATA':
      return action.payload.error
        ? { ...state, error: true }
        : {
          ...state,
          title: action.payload.response.data.title,
          image: action.payload.response.data.image,
          content: action.payload.response.data.content,
          userId: action.payload.response.data.user_id,
        }
    default:
      return state;
  }
}