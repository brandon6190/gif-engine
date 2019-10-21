import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3,2)
  },
	searchEngine: {
		border: '1px solid black',
  },
  button: {
    margin: theme.spacing(1)
  },
}));

function SearchEngine() {
	const classes = useStyles();

	return (
		<div className={classes.searchEngine}>
      <Paper className={classes.root}>
        <Typography variant='h1' component='h1'>
          GIFY Search Engine
        </Typography>
        <form>
          <TextField label="Search GIFs" type="search" />
          <Button className={classes.button} variant='contained' color='primary'>GIFs</Button>
        </form>
      </Paper>
		</div>
	);
}

export default SearchEngine;
