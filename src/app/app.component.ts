import {Component} from '@angular/core';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faBriefcase, faEnvelope, faPhone, faBookOpen, faPlay} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, filter, map, Observable} from "rxjs";

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
    faBiefcase = faBriefcase;
    faBookOpen = faBookOpen;
    faPlay = faPlay;
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
        'acn': {
            'leftSideBackgroundColor': '#a100ff',
            'rightSideSectionTitleColor': '#a100ff',
            'rightSideIconHolderBackground': '#a100ff',
        },
    }
    leftSideBackgroundColor: Observable<string>;
    rightSideSectionTitleColor: Observable<string>;
    rightSideIconHolderBackground: Observable<string>;


    fullStackDeveloper = 'Full Stack Developer'
    devOpsEngineer = 'DevOps Engineer'
    dataScientist = 'Data Scientist'
    shortRoleToLongRole = {
        'fsd': this.fullStackDeveloper, 'doe': this.devOpsEngineer, 'ds': this.dataScientist
    }
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
            tags: [this.fullStackDeveloper, this.fullStackDeveloper],
            title: 'Back-End Developer',
            company: 'German Gov. Financial Institution',
            companyBrand: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Informationstechnikzentrum_Bund_logo.svg',
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
            tags: [this.fullStackDeveloper, this.devOpsEngineer],
            title: 'DevOps Engineer',
            company: 'Swisscom',
            companyBrand: 'https://rcp.production.scsstatic.ch/content/dam/assets/about/unternehmen/marke/stages-teaser/liveform-anim-448x448-4fps.gif',
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
            tags: [this.fullStackDeveloper, this.devOpsEngineer, this.dataScientist],
            title: this.fullStackDeveloper,
            company: 'Accenture',
            companyBrand: 'https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem-700x394.png',
            fromDate: {
                year: '2020',
                month: 'Sep'
            },
            toDate: 'Jan 2023',
            // tslint:disable-next-line:max-line-length
            description: '<p>Client consultation, design and its implementation on cloud native architecture.</p>'
        },
        {
            tags: [this.dataScientist, this.fullStackDeveloper, this.devOpsEngineer],
            title: 'R&D',
            company: 'German Interior Affairs Institution',
            companyBrand: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/BMI_Logo.svg',
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
            tags: [this.dataScientist],
            title: 'Data Scientist',
            company: 'University of Applied Sciences Brandenburg',
            companyBrand: 'https://www.mystipendium.de/sites/default/files/th-brandenburg.png',
            fromDate: {
                year: '2019',
                month: 'Mar'
            },
            toDate: 'Aug 2019',
            // tslint:disable-next-line:max-line-length
            description: '<p>Design and develop programming tasks for students on Quantum computing.</p>'
        },
        {
            tags: [this.dataScientist],
            title: 'R&D',
            company: 'Networked Assets',
            companyBrand: 'https://www.networkedassets.com/wp-content/themes/basetheme/assets/images/logo_with_text.svg',
            fromDate: {
                year: '2019',
                month: 'Jan'
            },
            toDate: 'Aug 2019',
            // tslint:disable-next-line:max-line-length
            description: '<p>Research on predictive maintenance for DOCSIS cable networks and automatic documentation.</p>'
        },
        {
            tags: [this.fullStackDeveloper],
            title: 'Fron-End Developer',
            company: 'ORCA Geoservices',
            companyBrand: 'https://media.licdn.com/dms/image/C4E0BAQEWB5HB1m7cGw/company-logo_200_200/0/1647440727352?e=2147483647&v=beta&t=yNckgo4Iv31TvNFqjdmKijfIS_2ZyfMtWE3GOdk8aKU',
            fromDate: {
                year: '2017',
                month: 'Feb'
            },
            toDate: 'Jan 2019',
            // tslint:disable-next-line:max-line-length
            description: '<p>Develop mainly front end applications supporting goods controlling processes around the globe.</p>'
        }
    ];
    experiences$: Observable<any>

    constructor(private router: Router, private actRoute: ActivatedRoute) {

        let behaviorSubject = new BehaviorSubject(this.experiences);
        this.experiences$ = behaviorSubject.asObservable();

        let routeQueryParamCompany$ = this.router.events.pipe(
            filter(e => e instanceof NavigationEnd),
            // @ts-ignore
            map(e => this.actRoute.snapshot.queryParamMap.get('company'))
        );
        let routeQueryParamRole$ = this.router.events.pipe(
            filter(e => e instanceof NavigationEnd),
            // @ts-ignore
            map(e => this.actRoute.snapshot.queryParamMap.get('role'))
        );

        this.leftSideBackgroundColor = routeQueryParamCompany$.pipe(
            // @ts-ignore
            map((e: string) => this.routeToTheme[e]?.leftSideBackgroundColor ?? null),
        );
        this.rightSideSectionTitleColor = routeQueryParamCompany$.pipe(
            // @ts-ignore
            map((e: string) => this.routeToTheme[e]?.rightSideSectionTitleColor ?? null),
        );
        this.rightSideIconHolderBackground = routeQueryParamCompany$.pipe(
            // @ts-ignore
            map((e: string) => this.routeToTheme[e]?.rightSideIconHolderBackground ?? null),
        );

        routeQueryParamRole$
            .pipe(
                filter(role => role != null),
                // @ts-ignore
                map(role => this.shortRoleToLongRole[role])
            )
            .subscribe(role => {
                behaviorSubject.next(
                    this.experiences
                        .filter(
                            e => e.tags.find(t => t === role) != undefined
                        )
                        .sort((a, b) => a.fromDate < b.fromDate ? 1 : -1)
                );
            })
    }
}
