import React from 'react';

import UserInput from './UserInput';
import GifButton from './GifButton';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  userInput: {
    marginBottom: '15px'
  }
}));

function SearchField() {
  const {userInput} = useStyles();

  return (
    <form class={userInput}>
      <UserInput />
      <GifButton />
    </form>
  );
}

export default SearchField;