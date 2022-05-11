import { Button, Card } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function AxiosAll() {
    const [http, sethttp] = useState(null)
    const [load, setload] = useState('');

    //function for axios.delete using then & catch
    //put, patch, delete require an id along the data/http method
    const handleClick = () => {

        //showing buffer msg
        setload('Loading...')

        const url1 = 'https://jsonplaceholder.typicode.com/posts'
        const url2 = 'https://jsonplaceholder.typicode.com/albums'

        //axios.all -> like promise all  / simultanious request
        axios.all([
            axios.get(url1, { params: { _limit: 5 } }),
            axios.get(url2, { params: { _limit: 5 } }),
        ])

            //we get array of response
            .then(res => {
                console.log(res)
                // console.log(res[0])
                // console.log(res[1])
                sethttp(res)
            })
            .catch(err => { console.log(err) })
    }
    console.log(http);

    return (
        <div>
            <Button variant='contained'
                color='success'
                className='m-4'
                onClick={handleClick}
            >
                Axios All
            </Button>
            <hr />
            <div className='col-5 m-2 d-inline-flex'>
                {http === null ? <h1>{load}</h1> :
                    <>
                        <Card>
                            <h5>Network Status : {http[0].status}</h5>
                            <hr />
                            <h5>HTTP Method : {http[0].config.method.toUpperCase()}</h5>
                            <hr />
                            <h5>Content-type : {http[0].config.headers.Accept}</h5>
                            <hr />
                            <h5>Data - limit 5</h5>
                            {http[0].data.map((val, ind) => {
                                return <span key={val.id}><h5>{ind + 1}</h5>{val.title} </span>
                            })}
                        </Card>
                        <hr />
                    </>}
            </div>

            <div className='col-5 d-inline-flex'>
                {http === null ? <h1>{load}</h1> :
                    <>
                        <Card>
                            <h5>Network Status : {http[1].status}</h5>
                            <hr />
                            <h5>HTTP Method : {http[1].config.method.toUpperCase()}</h5>
                            <hr />
                            <h5>Content-type : {http[1].config.headers.Accept}</h5>
                            <hr />
                            <h5>Data - limit 5</h5>
                            {http[1].data.map((val, ind) => {
                                return <span key={val.id}><h5>{ind + 1}</h5>{val.title} </span>
                            })}
                        </Card>
                    </>}
            </div>

        </div >
    )
}

export default AxiosAll