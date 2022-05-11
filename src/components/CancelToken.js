import React from 'react'
import Typography from '@mui/material/Typography';
import { withRouter } from 'react-router-dom';

function CancelToken(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/canceltokencont')
    }}
    >CancelToken</Typography>
  )
}

export default withRouter(CancelToken)