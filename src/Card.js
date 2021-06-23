import React from 'react';

const Card = ({name,email,id}) => {
    return (
        //below code is jsx so importing react is important beacause of that jsx is working

        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src ={`https://robohash.org/${id}?100*100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;