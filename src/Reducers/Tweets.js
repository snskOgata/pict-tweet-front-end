
const getTweets = (response) => {
  const tweets = [];
  const tLength = response.data.length;

  for (let i = 0; i < tLength; i++) {
    const tweet = response.data[i];
    tweets.push({
      id: tweet.id,
      title: tweet.title,
      image: tweet.image.url,
      content: tweet.content,
      userId: tweet.user.id,
      userName: tweet.user.name,
    })
  }
  return tweets;
}
const initialState = {
  tweets: undefined,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return {
        tweets: undefined,
        error: false
      };

    case 'RECEIVE_DATA':
      return action.payload.error
        ? { ...state, error: true }
        : {
          ...state,
          tweets: getTweets(action.payload.response)
        }
    default:
      return state;
  }
}