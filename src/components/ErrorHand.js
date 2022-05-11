import React from 'react'
import { withRouter } from 'react-router-dom'
import Typography from '@mui/material/Typography';

function ErrorHand(props) {
  return (
    <Typography
      onClick={() => {
        props.history.push('/errorhandcont')
      }}
    >Error</Typography>
  )
}

export default withRouter(ErrorHand)