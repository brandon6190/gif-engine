import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	searchEngine: {
		border: '1px solid black',
	},
}));

function SearchEngine() {
	const classes = useStyles();

	return (
		<div className={classes.searchEngine}>
			<form>
				<TextField label="Search GIFs" type="search" />
			</form>
		</div>
	);
}

export default SearchEngine;
