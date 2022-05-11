import React from 'react'
import Typography from '@mui/material/Typography';
import { withRouter } from 'react-router-dom';

function Put(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/putcont')
    }}
    >PUT</Typography>
  )
}

export default withRouter(Put)