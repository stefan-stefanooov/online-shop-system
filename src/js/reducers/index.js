import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  tweets,
  user,
  routing: routerReducer
})
