import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function PostCont() {
  const [http, sethttp] = useState(null)
  const [load, setload] = useState('');

  //function for axios.post using then & catch
  const handleClick = () => {
    //showing buffer msg
    setload('Loading...')
    const url = 'https://jsonplaceholder.typicode.com/posts'
    //axios.post 
    axios.post(url, { title: 'New Title added by post request' } )
      .then(res => {
        console.log(res)
        sethttp(res)
      })
      .catch(err => { console.log(err) })
  }
  
  return (
    <div>
    <Button variant='contained'
      color='success'
      className='m-4'
      onClick={handleClick}
    >
      Post Data
    </Button>

    {http === null && <h1>{load}</h1>}

    {http && <>
      <h5>Network Status : {http.status}</h5>
      <hr />
      <h5>HTTP Method : {http.config.method.toUpperCase()}</h5>
      <hr />
      <h5>Content-type : {http.config.headers.Accept}</h5>
      <hr />
      <h5>Posted data</h5>
      <p>{http.data.id}-{http.data.title}</p>
      <hr />
    </>
    }
    
  </div>
  )
}

export default PostCont