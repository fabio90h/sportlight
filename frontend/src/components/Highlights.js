import React, { useState } from 'react'
import YouTube from 'react-youtube';

const Highlights = ({highlightArray}) => {
    let [videoIndex, setVideoIndex] = useState(0)

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
                highlightArray.length > 0 &&
                <React.Fragment key={videoIndex}>
                    <YouTube
                        containerClassName="highlight_player"
                        videoId={highlightArray[videoIndex].id}
                        opts={opts}
                    /> 
                    <button onClick={() => setVideoIndex(videoIndex+1)}>Try Another Video</button>
                    <button onClick={() => setVideoIndex(videoIndex-1)}>Previous Video</button>
                </React.Fragment>
                
            }
        </div>
    )
}

export default Highlights