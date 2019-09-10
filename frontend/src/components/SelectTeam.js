import React from 'react'
import Select from 'react-select'
import { teams } from '../data/teams'
import axios from 'axios'

/**
 * User has the ability to search for a team. API call will get the team's fixtures
 * @param {function} setTeamFixtures will send the information from Football-data api to parent 
 */
const SelectTeam = ({setTeamFixtures}) => {
    
    /**
     * API call to get the team's fixtures. Uses the library teams
     * @param {object} selectedTeam {label: Real Madrid, value: 36}
     */
    let handleSelectTeam = async (selectedTeam) => {
        let fixtures = await axios.post('/api/fixture', {
            team_id: selectedTeam.value
        })
        setTeamFixtures(fixtures.data.matches)
    }

    return(
        <div>
           <Select
                options={teams}
                onChange={handleSelectTeam}
           />
        </div>
    )
}

export default SelectTeam