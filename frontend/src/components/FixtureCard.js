import React from 'react'
import axios from 'axios'

const FixtureCard = ({fixtureData}) => {
    const {homeTeam, awayTeam, competition, utcTime} = fixtureData

    const handleButtonSearch = async () => {
        let res = await axios.post('/api/search', {
            homeTeam: homeTeam.name,
            awayTeam: awayTeam.name
        })
        console.log(res.data)
    }

    return (
        <div onClick={handleButtonSearch}>
            <div>
                {homeTeam.name} vs {awayTeam.name}
            </div>
            {/* <div>
                {competition}
            </div>
            <div>
                {utcTime}
            </div> */}
        </div>
    )
}

export default FixtureCard