const search = require('youtube-search')
const { youtube_api, youtube_alt } = require('../keys')

module.exports = (app) => {
    // Will search for highlights of a particular team based on the teams
    // name and the date of the fixture.
    app.post('/search', async (req, response) => {
        const { homeTeam, awayTeam, date } = req.body
        
        // YOUTUBE API
        var opts = {
            maxResults: 25,
            key: youtube_alt,
            videoDuration: "medium", //we want the video duration to be 4 to 20 min long
            type: "video",
            videoEmbeddable: "true",
            publishedAfter: date
        }

        search(`${homeTeam} ${awayTeam} highlights`, {...opts, }, (err, results) => {
            if(err) return console.log(err);
            let filterResults = results.filter(current => current.channelTitle !== "LaLiga Santander")
            response.send(filterResults);
        });
    })
}