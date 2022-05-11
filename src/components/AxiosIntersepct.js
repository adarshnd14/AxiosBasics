import React from 'react'
import { withRouter } from 'react-router-dom'
import Typography from '@mui/material/Typography';

function AxiosIntersect(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/axiosintersectcont')
    }}
    >Interseptor</Typography>
  )
}

export default withRouter(AxiosIntersect)