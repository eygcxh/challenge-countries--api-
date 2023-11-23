import { legacy_createStore as createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import axios from "axios"

import { rootReducer } from "./root-reducer"
import * as api from '../config'

const composeEnhancers = compose

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument({
      client: axios,
      api,
    })
  )
))