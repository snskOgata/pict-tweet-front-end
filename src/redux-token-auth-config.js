import { generateAuthActions } from 'redux-token-auth'

const config = {
  'http://localhost:3001/auth',
  userAttributes: {
    name: 'name'
  },
  userRegistrationAttributes: {
    name: 'name',
  },
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