import React, { useState } from 'react'
import axios from 'axios'

import SelectTeam from './SelectTeam'
import Fixtures from './Fixtures'

import '../App.css'


const Home = () => {
    const [teamFixtures, setTeamFixtures] = useState("")

    // BUTTONS FOR DEV
    const handleButtonTest = async () => {
        let res = await axios.get('/api/')
        console.log(res.data)
    }
    const handleButtonSearch = async () => {
        let res = await axios.get('/api/search')
        console.log(res.data)
    }
    const handleButtonFixtures = () => {
        // console.log(printFixtures())
    }

    return(
        <div>
            <div>
                <SelectTeam setTeamFixtures={setTeamFixtures}/>
            </div>
            <Fixtures teamFixtures={teamFixtures}/>
            <button onClick={handleButtonTest}>tests</button>
            <button onClick={handleButtonSearch}>search</button>
            <button onClick={handleButtonFixtures}>fixtures</button>
        </div>
    )
}

export default Home