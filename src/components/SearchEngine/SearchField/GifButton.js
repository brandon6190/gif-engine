import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
}));

function GifButton() {
	const { button } = useStyles();

	return (
		<Button className={button} variant="contained" color="primary">
			GIFs
		</Button>
	);
}

export default GifButton;
