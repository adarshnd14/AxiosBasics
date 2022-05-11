import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function PutCont() {
  const [http, sethttp] = useState(null)
  const [load, setload] = useState('');

  //function for axios.post using then & catch
  //put, patch, delete require an id along the data/http method
  const handleClick = () => {

    //showing buffer msg
    setload('Loading...')

    const url = 'https://jsonplaceholder.typicode.com/posts'
    
    //axios.post 
    axios.put(`${url}/1`, { title: 'New Title added by PUT request' })
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
      PUT Data
    </Button>

    {http === null && <h1>{load}</h1>}

    {http && <>
      <h5>Network Status : {http.status}</h5>
      <hr />
      <h5>HTTP Method : {http.config.method.toUpperCase()}</h5>
      <hr />
      <h5>Content-type : {http.config.headers.Accept}</h5>
      <hr />
      <h5>PUT data</h5>
      <p><b>id</b>-{http.data.id}, <b>title</b>-{http.data.title}</p>
      <small style={{color:'GrayText'}}>...All other details of that id will be removed...</small>
      <hr />
    </>
    }
   
    </div>
  )
}

export default PutCont