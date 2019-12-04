import React, { useContext } from 'react';

import { SearchEngineContext } from '../../../Store';

import Result from './Result';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gallery: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

function SearchResults() {
  const { gallery } = useStyles();
  const [appState] = useContext(SearchEngineContext);
  
  
  return (
    <div id='gallery' class={gallery}>
      {       
        appState.gifs.map(gif => {
          return <Result key={gif.id} id={gif.id} gif={gif.images.original} desc={gif.slug} />
        })
      }
    </div>
  )

}

export default SearchResults;