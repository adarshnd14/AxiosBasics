import React from 'react'
import { withRouter } from 'react-router-dom'
import Typography from '@mui/material/Typography';

function CustomHeaders(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/customheaderscont')
    }}
    >Header</Typography>
  )
}

export default withRouter(CustomHeaders)