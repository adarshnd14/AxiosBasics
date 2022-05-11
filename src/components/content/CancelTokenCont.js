import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

function CancelTokenCont() {
    //function for axios.get using then & catch
    const handleClick = () => {

        const url = 'https://jsonplaceholder.typicode.com/posts'
        const source = axios.CancelToken.source()

        //Canceling a token
        axios.get(url, { cancelToken: source.token })
            .then(res => {
                console.log(res)
            })
            .catch(thrown => {
                if (axios.isCancel(thrown)) {
                    console.log('Request canceled', thrown.message);
                }
            })
        if (true) {
            source.cancel('Request Canceled')
        }
    }
    return (
        <div>
            <Button variant='contained'
                color='success'
                className='m-4'
                onClick={handleClick}
            >
                Cancel Token
            </Button>
            <p>See console...</p>
        </div>
    )
}

export default CancelTokenCont