// Import React from the react library
import React from 'react';

const Card = (props) => {
    return (
        <td className='Card'>
            <img src={props.picture}></img>

            <h3>{props.name}</h3>

            <a href={props.link}><button role="button">Visit Website</button></a>
        </td>
    )
}

export default Card;