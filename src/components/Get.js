import React from 'react'
import Typography from '@mui/material/Typography';
import { withRouter } from 'react-router-dom';

function Get(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/getcont')
    }}
    >GET</Typography>
  )
}

export default withRouter(Get)