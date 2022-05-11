import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function ErrorCont() {
    const [http, sethttp] = useState(null)
    const [load, setload] = useState('');

    //function for axios.get using then & catch - fro error handling and timeout
    const handleClick = () => {

        const url = 'https://jsonplaceholder.typicode.com/postss' // wrong api, and prob with api

        //axios.get  and setting the limit in data
        axios.get(url, {
            params: { _limit: 5 },
            // timeout: 30      // add timeout
        })
            .then(res => {
                console.log(res)
                sethttp(res)
            })
            .catch(err => {
                if (err.response) {
                    //if server responded with a status other than 200 range
                    console.log('Error response', err.response);
                    console.log('Error status', err.response.status);
                    console.log('Error headers', err.response.headers);
                    setload(`${err.response.status}- Page not found - see console for more details...`)
                } else if (err.request) {
                    //Request was made but no reponse
                    console.error(err.request);
                } else {
                    console.error(err.message);
                }
            })
    }

    return (
        <div>
            <Button variant='contained'
                color='success'
                className='m-4'
                onClick={handleClick}
            >
                Error
            </Button>

            {http === null && <h3>{load}</h3>}

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

export default ErrorCont