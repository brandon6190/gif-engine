import React from 'react';

import Card from '@material-ui/core/Card';

// import {makeStyles} from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   card: {
//     widht: 
//   }
// }))


function Result(props) {
  console.log('gif = ', props.gif);
  const { url, slug, width, height} = props.gif;
  
  const cardStyles = {
    width: `${width}px`,
    height: `${height}px`
  }
  
  return (
    <Card style={cardStyles} >
      <img src={url} alt={slug} />
    </Card>
  )
}

export default Result;