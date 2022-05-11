import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

function AxiosInstanceCont() {

  const [http, sethttp] = useState(null)
  const [load, setload] = useState('');

  //creating axios instance - baseURL
  const axiosInstance = axios.create({
      baseURL:'https://jsonplaceholder.typicode.com'
  })
  
  const handleClick = () => {

    //showing buffer msg
    setload('Loading...')
    
    //axios.get  and setting the limit in data
    axiosInstance.get('/posts', { params: { _limit: 5 } })
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
      Get By Instance
      </Button>

      {http === null && <h1>{load}</h1>}

      {http && <>
        <h5>Network Status : {http.status}</h5>
        <hr />
        <h5>HTTP Method : {http.config.method.toUpperCase()}</h5>
        <hr />
        <h5>Content-type : {http.config.headers.Accept}</h5>
        <hr />
        <h5>Data - limit 5</h5>
        {http.data.map((val, ind) => {
          return <span key={val.id}><h5>{ind + 1}</h5>{val.title} </span>
        })}
        <hr />
      </>
      }

    </div>
  )
}

export default AxiosInstanceCont