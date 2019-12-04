import React from 'react';

import Card from '@material-ui/core/Card';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  singleImg: {
    padding: '0 20px 20px',
    '&:hover': {
      opacity: '0.5',
      transition: '0.5s'
    }
  }
}));


function Result(props) {
  console.log('gif = ', props.gif);
  const {singleImg} = useStyles();
  const { url, slug, width, height} = props.gif;
  
  const cardStyles = {
    width: `${width}px`,
    height: `${height}px`,
    display: 'inline'
  }
  
  return (
    <Card style={cardStyles} class={singleImg}>
      <img src={url} alt={slug} />
    </Card>
  )
}

export default Result;