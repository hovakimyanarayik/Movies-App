import { useEffect, useState } from 'react';
import DataBase, { endpoints } from '../../../database/database';
import YouTube from 'react-youtube';
import Section from '../../../components/common/section';


const MovieVideo = ({ id }) => {
    const [video, setVideo] = useState(null)

    useEffect(() => {
        DataBase.get(endpoints.videos(id))
        .then(res => {
            if(res.results.length) {
                setVideo(res.results.find(i => i.type === 'Trailer' && i.site === 'YouTube'))
            }
        })
    }, [id])

    const opts = {
        width: '100%',
        height: '390px',
        playerVars: {
          autoplay: 0,
        },
      };

    if(!video) return null
    return ( 
        <Section title={'Official Trailer'}>
            <YouTube className='video' videoId={video.key}  opts={opts} />
        </Section>
        
     );
}
 
export default MovieVideo;