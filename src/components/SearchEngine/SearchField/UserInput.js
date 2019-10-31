import React, { useContext } from 'react';
import { SearchEngineContext } from '../../../Store';

import TextField from '@material-ui/core/TextField';

function UserInput() {
  const [appState, updateState] = useContext(SearchEngineContext);
  
  const handleInputChange = event => {
    return updateState({type: 'INPUT_CHANGE', payload: event.target.value});
  }

  return (
    <TextField onChange={handleInputChange} value={appState.searchTerm} label="Search GIFs" type="search" />
  );
}

export default UserInput;