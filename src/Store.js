import React, { createContext, useReducer } from 'react';

export const SearchEngineContext = createContext();
const Provider = SearchEngineContext.Provider;

const initState = {
  searchTerm: 'Search...',
  gifs: [],
}

function reducer(state, action) {
  switch(action.type) {
    case  'INPUT_CHANGE':
      return {
        ...state,
        searchTerm: action.payload
      }
    case 'GIF_REQUEST':
      return {
        ...state,
        gifs: action.payload
      }
    default:
      throw new Error('error from reducer');
  }
}

function Store(props) {
  const stateHook = useReducer(reducer, initState); // -> [appState, dispatcher]

  return (
    <Provider value={stateHook}>
      {props.children}
    </Provider>
  )
}

export default Store;