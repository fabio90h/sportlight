import React, { useState } from 'react'
import YouTube from 'react-youtube';

/**
 * Will display youtube player and play the highlight. Button to skip to an alternative 
 * video in case the video is bad.
 * @param {array} highlightArray video information array grabbed from YouTube API 
 */
const Highlights = ({highlightArray}) => {
    // Video Index of the retrieved array of videos from the Youtube API
    let [videoIndex, setVideoIndex] = useState(0)

    // YouTube configurations
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          modestbranding: 1,
          rel : 0,
        }
    }

    return(
        <div>
            {
                // Only show the Youtube Player when there are video results
                highlightArray.length > 0 &&
                <React.Fragment key={videoIndex}>
                    <YouTube
                        containerClassName="highlight_player"
                        videoId={highlightArray[videoIndex].id}
                        opts={opts}
                    /> 
                    {/* User can change video of the same fixture depending on the quality of the video */}
                    <button onClick={() => setVideoIndex(videoIndex+1)}>Try Another Video</button>
                    <button onClick={() => setVideoIndex(videoIndex-1)}>Previous Video</button>
                </React.Fragment>
                
            }
        </div>
    )
}

export default Highlights