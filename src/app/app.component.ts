import { Component } from '@angular/core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  linkedInIcon = faLinkedinIn;
  githubIcon = faGithub;
  phoneIcon = faPhone;
  emailIcon = faEnvelope;
  title = 'cv';
  data: any = {
    firstName: "Dragoljub",
    lastName: "Milasinovic",
    jobTitle: "Data Scientist, Full Stack Developer",
    email: "dragoljub.milasinovic@outlook.com",
    phone: "privacy",
    github: 'https://DragoljubTHB.com/',
    linkedin: 'https://www.linkedin.com/in/dragoljub-milasinovic-7a109949/'
  }
  experiences = [
      {
        title: 'Back-End Developer',
        company: 'German Gov. Financial Institution',
        fromDate: {
          year: '2021',
          month: 'Sept'
        },
        toDate: '2022',
        // tslint:disable-next-line:max-line-length
        description: 'Analyse specifications, conceive and implement solutions supporting a cloud native approach. Used Domain Specific Languages, XML Schema Definition, fine granular validation framework. Used and adapted the existing DevOps code for infrastructure i.e. Kubernetes, Jenkins etc. \n' +
          'A go to person for many "how to" topics regarding architecture and Ops.'
      },
      {
        title: 'UI/UX Designer and Frontend Developer',
        company: 'Swisscom',
        fromDate: {
          year: '2020',
          month: 'Sep'
        },
        toDate: 'Aug 2021',
        // tslint:disable-next-line:max-line-length
        description: 'Omnichannel experience delivered via SAFe organization. Responsible for full stack development, it\'s delivery and support to tech lead with innovation and design decisions.'
      },
      {
        title: 'R&D',
        company: 'German Interior Affairs Institution',
        fromDate: {
          year: '2019',
          month: 'Sept'
        },
        toDate: 'Jul 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Analysis, research and development of methods for computing security measures out of logfiles. Results - Virtual laboratory was built. ( Many virtual machines executing different roles in scenarios and monitoring via a SIEM virtual machine ) - Applied AI driven penetration testing. ( Actor-Critic Reinforcement learning ) - Applied Natural Language Processing to extract meaning and entity references. ( Co-reference resolution ).'
      },
      {
        title: 'Data Scientist',
        company: 'University of Applied Sciences Brandenburg',
        fromDate: {
          year: '2019',
          month: 'Mar'
        },
        toDate: 'Aug 2019',
        // tslint:disable-next-line:max-line-length
        description: 'Design and develop programming tasks for students on Quantum computing.'
      },
      {
        title: 'R&D',
        company: 'Networked Assets',
        fromDate: {
          year: '2019',
          month: 'Jan'
        },
        toDate: 'Aug 2019',
        // tslint:disable-next-line:max-line-length
        description: 'Research on predictive maintenance for DOCSIS cable networks and automatic documentation.'
      },
      {
        title: 'Fron-End Developer',
        company: 'ORCA Geoservices',
        fromDate: {
          year: '2017',
          month: 'Feb'
        },
        toDate: 'Jan 2019',
        // tslint:disable-next-line:max-line-length
        description: 'Develop mainly front end applications supporting goods controlling processes around the globe.'
      }
    ];

}
