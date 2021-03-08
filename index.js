import {
  AppRegistry,
} from 'react-native';

import React, {
  Component 
} from 'react'

import { 
  Provider, 
  connect 
} from 'react-redux';

import { 
  createStore,
  applyMiddleware
} from 'redux'

import ReduxThunk from 'redux-thunk'
import AppReducer from './reducer'
import App from "./App"

const store = createStore(AppReducer, applyMiddleware(ReduxThunk))

class Root extends Component{
  render(){
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
AppRegistry.registerComponent("App", () => Root);

