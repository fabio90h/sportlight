import React, { useState } from 'react'
import FixtureCard from './FixtureCard'
import Highlights from './Highlights'

/**
 * Displays the six fixtures of a particular team
 * @param {array} teamFixtures Games from the Football-data API for a particular team
 * @return Will show the team's fixtures as well as the highlight component
 */
const Fixtures = ({teamFixtures}) => {
    const [highlightArray, setHighlightArray] = useState([])

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
                <FixtureCard 
                    key={fixtureIndex} 
                    fixtureData={teamFixtures[fixtureIndex]} 
                    setHighlightArray={setHighlightArray}
                />
            )
        }
        return fixturesArray
    }
    
    return(
        <div>
            <div>
                {printFixtures()}
            </div>
            <div>
                <Highlights highlightArray={highlightArray}/>
            </div>
        </div>
    )
}

export default Fixtures