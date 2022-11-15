import React from 'react';
import { Center, Text } from '@chakra-ui/react';
import Section from '../../../components/common/section';
import VoteStars from '../../../components/common/voteStars';
import { formateDate } from '../../../utils';
import GenresBedges from "./genresBedges";
import MoreLessText from '../../../components/common/moreLessText';


const PosterInfo = ({ data }) => {

    return ( 
        <div className="poster-info">
            <Section title={data.title} icon={<VoteStars votes={data.vote_average} />} >
                {data.tagline && <Center opacity='.4'>
                    <Text fontSize='2rem' fontStyle='oblique'>{data.tagline}</Text>
                </Center>}
                <Text fontSize='1.5rem'>{`${data.runtime}min`}</Text>
                <Text fontSize='1.5rem' mt={3}>{formateDate(data.release_date)}</Text>
                <GenresBedges genres={data.genres}/>
                <MoreLessText className='mt-20'>{data.overview}</MoreLessText>
            </Section>
        </div>
     );
}
 
export default PosterInfo;