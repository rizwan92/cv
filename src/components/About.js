import React from 'react';
import propTypes from 'prop-types';
import Social from './Social';

const About = ({avatar, name, profession, bio, address, social}) => {
  return(
    <div className='bio'>
      <div className='avatar'>
        <img src={avatar} alt={name} />
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div className='desc'>
        <p>{bio}</p>
      </div>
      <div className='address'>
        <p>{address}</p>
      </div>
      <Social social={social} />
    </div>
  );
};

About.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  profession: propTypes.string,
  bio: propTypes.string,
  address: propTypes.string,
  social: propTypes.array
};

export default About;
