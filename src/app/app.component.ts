import {Component, OnInit} from '@angular/core';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faBriefcase, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {NavigationEnd, Router} from "@angular/router";
import {filter, map, Observable} from "rxjs";

@Component({
    selector: 'cv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    linkedInIcon = faLinkedinIn;
    githubIcon = faGithub;
    phoneIcon = faPhone;
    emailIcon = faEnvelope;
    faBiefcase = faBriefcase;
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
            description: '<p>Analyse specifications, conceive and implement solutions supporting a cloud native approach.</p>' +
                '<p>Used Domain Specific Languages, XML Schema Definition, fine granular validation framework.</p>' +
                '<p>Used and adapted the existing DevOps code for infrastructure i.e. Kubernetes, Jenkins etc.</p>' +
                '<p>A go to person for many "how to" topics regarding architecture and Ops.</p>'
        },
        {
            title: 'DevOps Engineer',
            company: 'Swisscom',
            fromDate: {
                year: '2020',
                month: 'Sep'
            },
            toDate: 'Aug 2021',
            // tslint:disable-next-line:max-line-length
            description: '<p>Omnichannel experience delivered via SAFe organization.</p>' +
                '<p>Responsible for full stack development, it\'s delivery. Supported tech leads with innovation and design decisions.</p>'
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
            description: '<p>Analysis, research and development of methods for computing security measures out of logfiles.</p>' +
                '<p>Virtual laboratory was built. ( Many virtual machines executing different roles in scenarios and monitoring via a SIEM virtual machine )</p>' +
                '<p>Applied AI driven penetration testing. ( Actor-Critic Reinforcement learning ).</p>' +
                '<p>Applied Natural Language Processing to extract meaning and entity references. ( Co-reference resolution ).</p>'
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
            description: '<p>Design and develop programming tasks for students on Quantum computing.</p>'
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
            description: '<p>Research on predictive maintenance for DOCSIS cable networks and automatic documentation.</p>'
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
            description: '<p>Develop mainly front end applications supporting goods controlling processes around the globe.</p>'
        }
    ];

    routeToTheme: any = {
        'sbb': {
            'leftSideBackgroundColor': '#ec0000',
            'rightSideSectionTitleColor': '#ec0000',
            'rightSideIconHolderBackground': '#ec0000',
        },
        'google': {
            'leftSideBackgroundColor': '#4285F4',
            'rightSideSectionTitleColor': '#34A853',
            'rightSideIconHolderBackground': '#EA4335',
        },
        'celonis': {
            'leftSideBackgroundColor': '#5ccc50',
            'rightSideSectionTitleColor': '#5ccc50',
            'rightSideIconHolderBackground': '#5ccc50',
        },
    }
    leftSideBackgroundColor: Observable<string>;
    rightSideSectionTitleColor: Observable<string>;
    rightSideIconHolderBackground: Observable<string>;

    constructor(private router: Router) {

        let route$ = this.router.events.pipe(
            filter(e => e instanceof NavigationEnd),
        // @ts-ignore
            map(e => e.url.replace('/', ''))
        );

        this.leftSideBackgroundColor = route$.pipe(
            // @ts-ignore
            map((e: string) => this.routeToTheme[e]?.leftSideBackgroundColor ?? null),
        );
        this.rightSideSectionTitleColor = route$.pipe(
            // @ts-ignore
            map((e: string) => this.routeToTheme[e]?.rightSideSectionTitleColor ?? null),
        );
        this.rightSideIconHolderBackground = route$.pipe(
            // @ts-ignore
            map((e: string) => this.routeToTheme[e]?.rightSideIconHolderBackground ?? null),
        );
    }

    ngOnInit(): void {
        console.log("router: ", this.router.url)
    }

    public mapLeftSideBackgroundColor(url: string): string {
        /***
         * left-side background: leftSideBackgroundColor
         *
         * right-side
         * styles section-title color
         * styles section-title icon-holder background
         */
        this.routeToTheme[url].leftSideBackgroundColor

        switch (url) {
            case 'sbb':
                return 'red'
            case 'google':
                return 'blue'
            default:
                return 'green'
        }


    }
}
