import React from 'react';

const Projects = (props) => {
  const myExperience = (
    <div>
      {props.experience.map((exp) =>
        <div className='item' key={exp.jobTitle}>
          <h3>{exp.jobTitle} @ {exp.company} <span>{exp.startDate} - {exp.endDate}</span></h3>
          <p>{exp.jobDescription}</p>
          {exp.link.map((lnk,i)=><a style={{display:'block'}} key={i} href={lnk} target="_blank">{lnk}</a>)}
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>Projects</h2>
      {myExperience}
    </div>
  )
};

export default Projects;
