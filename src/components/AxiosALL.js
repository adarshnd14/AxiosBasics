import React from 'react'
import Typography from '@mui/material/Typography';
import { withRouter } from 'react-router-dom';

function AxiosALL(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/axiosallcont')
    }}
    >ALL</Typography>
  )
}

export default withRouter(AxiosALL)