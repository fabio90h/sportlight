const {football_data_api, api_football } = require('../keys')
const axios = require('axios')

// FOOTBALL-DATA API Config
let config = {
    headers: {
        "X-Auth-Token": football_data_api
    }
}

module.exports = (app) => {
    // API-Football API
    app.get('/fixture/api_football', () => {
        // API_FOOTBALL
        // let config = {
        //     headers: {
        //         "X-RapidAPI-Key": api_football,
        //         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        //     } 
        // }
        // let league =  await axios.get("https://api-football-v1.p.rapidapi.com/v2/leagues/country/spain/", config)
        // league = league.data.api.leagues.filter(current => current.is_current === 1 && current.name === "Primera Division")[0]
        // let team = await axios.get(`https://api-football-v1.p.rapidapi.com/v2/teams/league/${league.league_id}`, config)
        // team = team.data.api.teams.filter(current => current.name.toLowerCase().includes("real mad"))[0]
        // let fixtures = await axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${team.team_id}`, config)
    })

    // Football-data API
    app.post('/fixture', async (req, response) => {
        const { team_id } = req.body
        //let league =  await axios.get("https://api.football-data.org/v2/competitions/PD/teams", config)
        //let league =  await axios.get("https://api.football-data.org/v2/competitions/", config)

        let fixtures =  await axios.get(`https://api.football-data.org/v2/teams/${team_id}/matches/`, config)

        response.send(fixtures.data)
    })
}