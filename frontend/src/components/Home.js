import React, { useState } from 'react'
import SelectTeam from './SelectTeam'
import axios from 'axios'

const Home = () => {
    const [teamFixtures, setTeamFixtures] = useState("")

    // BUTTONS FOR DEV
    const handleButtonTest = async () => {
        let res = await axios.get('/api/fixture')
        console.log(res.data)
    }
    const handleButtonSearch = async () => {
        let res = await axios.get('/api/search')
        console.log(res.data)
    }
    const handleButtonFixtures = () => {
        console.log(teamFixtures)
    }



    return(
        <div>
            <div>
                <SelectTeam setTeamFixturesParent={setTeamFixtures}/>
            </div>
            <div>

            </div>
            <button onClick={handleButtonTest}>tests</button>
            <button onClick={handleButtonSearch}>search</button>
            <button onClick={handleButtonFixtures}>fixtures</button>
        </div>
    )
}

export default Home