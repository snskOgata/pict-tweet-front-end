import { generateAuthActions } from 'redux-token-auth'

const config = {
  authUrl: 'http://localhost:3001/auth',
  userAttributes: {
    id: 'id',
    name: 'name',
    email: 'email',
  },
  userRegistrationAttributes: {
    name: 'name',
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}