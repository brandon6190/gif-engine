import React, { useContext } from 'react';
import { SearchEngineContext } from '../../../Store';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const API_KEY = 'ano8y2sspOi6Udt2zE7MmAipRAr9NgPf';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
}));

function GifButton() {
	const { button } = useStyles();
	const [appState, updateState] = useContext(SearchEngineContext);

	const handleUserClick = event => {
		fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${appState.searchTerm}&limit=20&offset=0&rating=G&lang=en`,
    )
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log('data = ', data.data);
      updateState({type: 'GIF_REQUEST', payload: data.data});
    })
    .catch(err => {
      throw new Error('Error from api request');
    })
	};

	return (
		<Button
			className={button}
			onClick={handleUserClick}
			variant="contained"
			color="primary">
			GIFs
		</Button>
	);
}

export default GifButton;
