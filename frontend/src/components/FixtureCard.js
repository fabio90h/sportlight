import React from 'react'
import axios from 'axios'

const FixtureCard = ({fixtureData, setHighlightArray}) => {
    const {homeTeam, awayTeam, competition, utcDate} = fixtureData

    const handleButtonSearch = async () => {
        setHighlightArray([])
        let highlightArray = await axios.post('/api/search', {
            homeTeam: homeTeam.name,
            awayTeam: awayTeam.name,
            date: utcDate
        })
        setHighlightArray(highlightArray.data)
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