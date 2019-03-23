import React from 'react';

const Card = ({ CourseName,Provider,ParentSubject,ChildSubject }) => {
	return (
		<div className = 'tc bg-light-silver hover-bg-dark-gray dib br2 pa3 ma2 grow bw2 shadow-5 w-30 h5'>
			{/*<img alt='Robot' src={`https://robohash.org/${id}?200x200`} />*/}
		  <div>
            <h2>{CourseName}</h2>
            <p>{Provider}</p>
            <p>{ChildSubject}</p>
            <p>{ParentSubject}</p>
		  </div>
		</div>
	);
}

export default Card;

