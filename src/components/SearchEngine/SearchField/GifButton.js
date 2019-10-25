import React, { useContext } from 'react';
import { SearchEngineContext } from '../../../Store';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
}));

function GifButton() {
  const { button } = useStyles();
  const [appState] = useContext(SearchEngineContext);
  
  const handleClick = event => {
    console.log('appState = ', appState.searchTerm);
  }

	return (
		<Button className={button} onClick={handleClick} variant="contained" color="primary">
			GIFs
		</Button>
	);
}

export default GifButton;
