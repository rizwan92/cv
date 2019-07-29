import React from 'react';

const Projects = (props) => {
  const myExperience = (
    <div>
      {props.experience.map((exp,i) =>
        <div className='item' key={i}>
          <h3>{exp.jobTitle} @ {exp.company} <span>{exp.startDate} - {exp.endDate}</span></h3>
          <p>{exp.jobDescription}</p>
          {exp.link.map((lnk,i)=><a style={{display:'block'}} key={i} href={lnk} rel="noopener noreferrer" target="_blank">{lnk}</a>)}
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>{props.name}</h2>
      {myExperience}
    </div>
  )
};

export default Projects;
