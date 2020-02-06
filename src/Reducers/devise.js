const initialState = {
  tokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        name: null,
      },
    },
  },
}

export default () => initialState;