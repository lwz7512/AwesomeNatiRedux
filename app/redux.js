import { applyMiddleware, combineReducers, createStore } from 'redux';

import { Platform, } from 'react-native';
  

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  

// actions.js, called by ui
// suffixed by X means dispatch anction to reducer
// then sent to reducer
// @2018/04/12
export const activateGeodX = param => ({
    type: 'ACTIVATE_GEOD',
    payload: param,
});

export const closeGeodX = () => ({
    type: 'CLOSE_GEOD',
});

// reducers.js, produce new state based on action
export const _stateByAction = (state = '...', action) => {
    console.log('passing instructions...');
    switch (action.type) {
        case 'ACTIVATE_GEOD':
        return action.payload;

        case 'CLOSE_GEOD':
        return 'NO payload passed in!';

        default:
        // initially return default value
        return state;
    }
};

// state producer & exposer
// redefined: expose property for state using _stateByAction
export const reducers = combineReducers({
  welcome: () => {
      console.log('passing welcome...');
      return 'Welcome to React Native!';
  },
  start: () => {
      console.log('passing start...');
      return 'To get started, edit App.js';
  },
  instructions: _stateByAction,
});

// store.js
// initialState override the state value defined in reducer
export function configureStore(initialState = {instructions: instructions}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
