import React, { useEffect, useState } from 'react';
import Section from '../../../components/common/section';
import DataBase, { endpoints } from '../../../database/database';
import CreditItem from './creditItem';
import { TiThMenuOutline } from 'react-icons/ti'

const MovieCredits = ({id}) => {
    const [credits, setCredits] = useState(null)
    useEffect(() => {
        DataBase.get(endpoints.credits(id))
        .then(res => setCredits(res.cast.filter(cred => cred.profile_path && cred.known_for_department === 'Acting')))
    }, [id])
    if(!credits || !credits.length) return(null)
    return (
        <Section title='Cast & Crew' icon={<TiThMenuOutline size={25} />}>
            <div className='credits-wrapper'>
                {credits.map(credit => (
                    <CreditItem key={credit.id} credit={credit} />
                ))}

            </div>
        </Section>
     );
}
 
export default MovieCredits;