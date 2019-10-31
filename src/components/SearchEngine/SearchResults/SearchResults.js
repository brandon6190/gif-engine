import React, { useContext } from 'react';

import { SearchEngineContext } from '../../../Store';

import Result from './Result';

function SearchResults() {
  const [appState] = useContext(SearchEngineContext);
  
  
  return (
    <div id='gallery'>
      {       
        appState.gifs.map(gif => {
          return <Result key={gif.id} id={gif.id} gif={gif.images.original} desc={gif.slug} />
        })
      }
    </div>
  )

}

export default SearchResults;