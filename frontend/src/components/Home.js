import React from 'react'
import axios from 'axios'

const Home = () => {
    const handleButton = async () => {
        let res = await axios.get('/api/')
        console.log(res.data)
    }

    return(
        <button onClick={handleButton}>test</button>
    )
}

export default Home