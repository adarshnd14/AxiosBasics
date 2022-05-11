import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

function AxiosIntersepctCont() {

    const [http, sethttp] = useState(null)
    const [load, setload] = useState('');

    //creating axios.interceptors 
    axios.interceptors.request.use(config => {
        console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()} from INTERSEPTOR`);
        return config
    },
        error => {
            return Promise.reject(error)
        })


    //function for axios.get using then & catch
    const handleClick = () => {

        //showing buffer msg
        setload('Loading...')

        const url = 'https://jsonplaceholder.typicode.com/posts'

        //axios.get  and setting the limit in data
        axios.get(url, { params: { _limit: 5 } })
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
                Get data with Interseptor
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

export default AxiosIntersepctCont