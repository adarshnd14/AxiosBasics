import React from 'react'
import { withRouter } from 'react-router-dom'
import Typography from '@mui/material/Typography';

function Patch(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/patchcont')
    }}
    >Patch</Typography>
  )
}

export default withRouter(Patch)