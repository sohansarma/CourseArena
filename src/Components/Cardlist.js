import React from 'react';
import Card from './Card';

const CardList = ({ courses }) => {
      return (
      	<div>  
			 {
			 	courses.map((course, i) => {
		    return (
			  <Card 
					key={i} 
					CourseName={courses[i]['Course Name']} 
				    Provider={courses[i].Provider} 
				    // Institutions={courses[i][0].Institutions}
				    ParentSubject={courses[i]['Parent Subject']} 
				    ChildSubject={courses[i]['Child Subject']}
			  />
			 );
	        })
		  }
      	</div>
      );
}

export default CardList;