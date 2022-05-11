import React from 'react'
import { withRouter } from 'react-router-dom'
import Typography from '@mui/material/Typography';

function Delete(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/deletecont')
    }}
    >DELETE</Typography>
  )
}

export default withRouter(Delete)