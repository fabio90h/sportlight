const search = require('youtube-search')
const axios = require('axios')

const { youtube_api, football_data_api, api_football, youtube_alt } = require('./keys')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', (req, response) => {
    response.send("tests")
})

// YOUTUBE API
var opts = {
    maxResults: 25,
    key: youtube_alt,
    videoDuration: "medium",
    type: "video",
    videoEmbeddable: "true",
}

app.post('/search', async (req, response) => {
    const { homeTeam, awayTeam, date } = req.body
    search(`${homeTeam} ${awayTeam} highlights`, {...opts, publishedAfter: date}, (err, results) => {
        if(err) return console.log(err);
        let filterResults = results.filter(current => current.channelTitle !== "LaLiga Santander")
        response.send(filterResults);
      });
})



// SOCCER API
app.post('/fixture', async (req, response) => {
    const { team_id } = req.body

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
    
    
    // var fd = new FootballData(football_data_api);
    // let league = await fd.teamMatches(86)

    // FOOTBALL-DATA API
    let config = {
        headers: {
            "X-Auth-Token": football_data_api
        }
    }
    //let league =  await axios.get("https://api.football-data.org/v2/competitions/PD/teams", config)
    //let league =  await axios.get("https://api.football-data.org/v2/competitions/", config)

    let fixtures =  await axios.get(`https://api.football-data.org/v2/teams/${team_id}/matches/`, config)
    //console.log(fixtures.data)

    response.send(fixtures.data)
})

app.listen(5000)