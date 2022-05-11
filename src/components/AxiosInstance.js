import React from 'react'
import { withRouter } from 'react-router-dom'
import Typography from '@mui/material/Typography';

function AxiosInstance(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/AxiosInstancecont')
    }}
    >Instance Get</Typography>
  )
}

export default withRouter(AxiosInstance)