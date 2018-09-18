import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: 'https://media.licdn.com/dms/image/C5103AQH_6NWEqKADFg/profile-displayphoto-shrink_200_200/0?e=1542844800&v=beta&t=hTtckz-bK-mvVSuRlvN_uObkaBeFNVw6LBSYkXGtFks',
      name: 'RIZWAN CHOUHAN',
      profession: 'Full Stack Javascript Developer',
      bio: '❤ Mobile App Developer - React-Native Mobile App Development',
      address: 'India,Raipur.',
      social: [
        {name: 'facebook', url: 'https://www.facebook.com/rizwan.chouhan.52'},
        {name: 'twitter', url: 'https://twitter.com/rizwan_chouhan'},
        {name: 'github', url: 'https://github.com/rizwan92'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/md-rizwan-raza-9b1770117/'}
      ],
      experience: [
        {jobTitle: 'Front End', startDate: 'November 2015', endDate: 'Present', jobDescription: 'Using React, Apollo Client, HTML, CSS, Flexbox, Jquery, Twitter Bootstrap, Semantic UI and  Matrial Design as my Front-End Stacks'},
        {jobTitle: 'Backend', startDate: 'November 2015', endDate: 'Present', jobDescription: 'Nodejs, Express, Meteor, PHP, AWSCLI, GraphQl, Hyperledger Composer, Ethereum Solidity.'},
        {jobTitle: 'Mobile App', startDate: 'July 2016', endDate: 'Present', jobDescription: 'Android (Java) , React-Native '},
        {jobTitle: 'Database', startDate: 'November 2015', endDate: 'Present', jobDescription: 'MYSQL, PostgreSQL, MongoDb, (Started Cloud MongoDb as Database sevice in September 2018)'},
        {jobTitle: 'Others',endDate: 'Present', jobDescription: 'Linux(Ubuntu), Docker,'},
      ],
      projects: [
        {jobTitle: 'Sandwich Junction', company:'Metoer (NodeJs)', startDate: 'Feb 2017', endDate: 'April 2017', jobDescription: 'Sandwich Junction is a leading business in sandwich service Supply Chain in Raipur. Developed from billing to supply and management event driven based system. Developed on Meteor Framework.',link:['http://52.66.26.168/login']},
        {jobTitle: 'Bihan Application', company:'React-Native', startDate: 'May 2017', endDate: 'Jun 2017', jobDescription: 'Bihan is the service under NRLM department of chhattisgarh state in India. which helps self help group and other rural development activities in chhattisgarh.',link:['https://play.google.com/store/apps/details?id=com.bihan']},
        {jobTitle: 'Maroon Entertainment Application' , company:'React-Native', startDate: 'Jun 2017', endDate: 'July 2017', jobDescription: 'Maroon entertainment is the event organization and management company. I am working on its ticket booking and management dashboard or ticket booking React-Native Application',link:['https://play.google.com/store/apps/details?id=com.maroon&hl=en']},
        {jobTitle: 'Atithi Complaince System' , company:'Hyperledger Composer', startDate: 'November 2017', endDate: 'Present', jobDescription: 'Blockchain based compliance solution to power smart cities. ',link:['https://atithi.app/']},
        {jobTitle: 'MDAS ' , company:'Open Source Project', startDate: '2018', jobDescription: 'MongoDb Database As Service in Clouds ',link:['Not Available We Are working on Architecture']},
        {jobTitle: 'Freelancing Websites' , company:'React and PHP', startDate: ' from 2016', jobDescription: 'My Freelance websites and work',link:['http://allcoursesfree.com/','https://rizwan92.github.io/ndax.github.io/index.html','http://nbdigitech.com/','https://rizwan92.github.io/blockcertify/#/','http://letzholiday.in/ref/','https://www.directionclasses.com/']},
      ],
      education: [
        {degree: 'Electronics and Telecommunication Engineering', institution: 'Chhattrapati Shivaji Institute of Technology India (C.G.)', startDate: '2011', endDate: '2015', description: ''},
      ],
      certificate: [
        {name: 'Udacity Nano Degree Program', institution: 'Udacity', date: 'Jan 2016', description: 'Certified from Udacity Nano Degree Program in Android' },
      ],
      skills: [
        {name: 'JavaScript', percentage: '95%'},
        {name: 'Nodejs', percentage: '90%'},
        {name: 'Meteor', percentage: '90%'},
        {name: 'React', percentage: '90%'},
        {name: 'React-Native', percentage: '85%'},
        {name: 'PHP', percentage: '60%'},
        {name: 'Hyperledger Blockchain', percentage:"30%"},
        {name: 'Ethereum Solidity', percentage:"25%"}
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
                <Projects  experience={person.projects}/>
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
