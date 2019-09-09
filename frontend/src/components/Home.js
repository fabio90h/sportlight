import React, { useState } from 'react'
import SelectTeam from './SelectTeam'
//import Fixtures from './Fixtures'
import axios from 'axios'
import FixtureCard from './FixtureCard'


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
        console.log(printFixtures())
    }

    // SHOW ONLY 6 FIXTURES. 3 FROM THE RESULT AND 3 FROM SCHEDULED
    const printFixtures = () => {
        if(teamFixtures.length < 1) return []
        // FINDING THE NEXT SCHEDULED FIXTURE
        let currentFixtureIndex = teamFixtures.findIndex(current => current.status === "SCHEDULED")
        // GOING BACK TO FINISHED FIXTURES
        let finishedFixtureIndex = currentFixtureIndex - 3
        let fixturesArray = []
        
        for(let fixtureIndex = finishedFixtureIndex; fixtureIndex < finishedFixtureIndex + 6; fixtureIndex++){
            fixturesArray.push(
                <FixtureCard key={fixtureIndex} fixtureData={teamFixtures[fixtureIndex]}/>
            )
        }
        return fixturesArray
    }


    return(
        <div>
            <div>
                <SelectTeam setTeamFixturesParent={setTeamFixtures}/>
            </div>
            {
                printFixtures()
            }
            <button onClick={handleButtonTest}>tests</button>
            <button onClick={handleButtonSearch}>search</button>
            <button onClick={handleButtonFixtures}>fixtures</button>
        </div>
    )
}

export default Home