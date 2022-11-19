import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataBase from '../../../database/database';


const CreditItem = ({ credit }) => {
    const navigate = useNavigate()
    return ( 
        <div 
            className='credits-item'
            onClick={() => navigate(`/movies?with_people=${credit.id}`)}
        >
            <img src={DataBase.getOriginalImageURL(credit.profile_path)} alt="Credit" />
            <h1>{credit.name} / <p>{credit.character}</p></h1>
        </div>
     );
}
 
export default CreditItem;