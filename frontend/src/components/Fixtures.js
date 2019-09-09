import React from 'react'
import FixtureCard from './FixtureCard'

const Fixtures = ({teamFixtures}) => {
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
            {printFixtures()}
        </div>
    )
}

export default Fixtures