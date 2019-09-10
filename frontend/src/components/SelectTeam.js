import React from 'react'
import Select from 'react-select'
import { teams } from '../data/teams'
import axios from 'axios'

const SelectTeam = ({setTeamFixtures}) => {
    
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