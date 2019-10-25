import React from 'react';

import UserInput from './UserInput';
import GifButton from './GifButton';

function SearchField() {
  return (
    <form>
      <UserInput />
      <GifButton />
    </form>
  );
}

export default SearchField;