import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function CustomHeadersCont() {
    const [http, sethttp] = useState(null)
    const [load, setload] = useState('');

    //at the time when we have to send some data to backend in header
    //good example is while using JWT we have to send tocken to BEnd/ access protected routes in headers
    const config = {
        headers: {
            'content-Type': 'application/json',
            Authorization: '/o6rtyf5r5...sometoken...jytdu7654dcfg&^%$'
        }
    }

    //function for axios.post using then & catch
    const handleClick = () => {
        //showing buffer msg
        setload('Loading...')
        const url = 'https://jsonplaceholder.typicode.com/posts'
        //axios.post 
        axios.post(url, { title: 'New Title added by post request' },
            config
        )
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
                cUSTOM HEADER
            </Button>

            {http === null && <h1>{load}</h1>}

            {http && <>
                <h5>Network Status : {http.status}</h5>
                <hr />
                <h5>HTTP Method : {http.config.method.toUpperCase()}</h5>
                <hr />
                <h5>Content-type : {http.config.headers.Accept}</h5>
                <hr />
                <h5>Added Authentication token</h5>
                <p>{http.config.headers.Authorization}</p>
                <hr />
            </>}

        </div>
    )
}

export default CustomHeadersCont