import { Text } from '@chakra-ui/react';
import React from 'react';
import Section from '../../components/common/section';
import VoteStars from '../../components/common/voteStars';
import { formateDate } from '../../utils';
import GenresBedges from './genresBedges';


const PosterInfo = ({ data }) => {

    return ( 
        <div className="poster-info">
            <Section title={data.title} icon={<VoteStars votes={data.vote_average} />} >
                <Text fontSize='1.5rem' mt={3}>{`${data.runtime}min`}</Text>
                <Text fontSize='1.5rem' mt={3}>{formateDate(data.release_date)}</Text>
                <GenresBedges genres={data.genres} />
            </Section>
        </div>
     );
}
 
export default PosterInfo;