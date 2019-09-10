import React from 'react'
import axios from 'axios'

/**
 * Will display 3 past fixtures and 3 future fixures. Users have the
 * ability to click on the fixture cards to see the highlight of the match.
 * @param {array} fixtureData 6 latest fixtures of a particular team
 * @param {function} setHighlightArray sends highlight video array results grabbed from the youtube API
 * @return {object} One fixture Card of teams player
 */
const FixtureCard = ({fixtureData, setHighlightArray}) => {
    const {homeTeam, awayTeam, competition, utcDate} = fixtureData

    /**
     * Triggered when the user clicks on the fixutre card.
     * Request call to get the youtube video based on the team names
     * and the date of the publication
     * @returns null
     */
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