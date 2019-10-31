import React from 'react';

// * Tree Components
import SearchField from './SearchField/SearchField';
import SearchResults from './SearchResults/SearchResults';

// * method to create classes and css rules
import { makeStyles } from '@material-ui/core/styles';

// * Styled Components
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// * Hook to use classes and their respective css rules
const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3,2),
  }
}));

function SearchEngine() {
  const { root } = useStyles();

	return (
		<div>
      <Paper className={root}>
        {/* <Typography variant='h1' component='h1'>
          GIFY Engine
        </Typography> */}

        <SearchField />
        <SearchResults />
      </Paper>
		</div>
	);
}

export default SearchEngine;
