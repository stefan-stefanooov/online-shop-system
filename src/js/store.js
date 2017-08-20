import { applyMiddleware, createStore } from "redux"

import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import promiseMiddleware from "redux-promise-middleware"

import reducer from "./reducers"

const logger = createLogger(); 

const middleware = applyMiddleware(promiseMiddleware(), thunkMiddleware, logger) 

export default createStore(reducer, middleware)

