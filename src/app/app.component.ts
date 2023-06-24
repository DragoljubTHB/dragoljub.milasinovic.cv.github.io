import {Component} from '@angular/core';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faBriefcase, faEnvelope, faPhone, faBookOpen, faPlay, faChartLine, faBoxOpen} from "@fortawesome/free-solid-svg-icons";
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
    faChartLine = faChartLine;
    faBoxOpen = faBoxOpen;
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
        'nvidia': {
            'leftSideBackgroundColor': '#76b900',
            'rightSideSectionTitleColor': '#76b900',
            'rightSideIconHolderBackground': '#1a1a1a',
        },
        'swisscom': {
            'leftSideBackgroundColor': '#1781e3',
            'rightSideSectionTitleColor': '#1781e3',
            'rightSideIconHolderBackground': '#ec0000',
        },
        'nestlee': {
            'leftSideBackgroundColor': '#65513d',
            'rightSideSectionTitleColor': '#1781e3',
            'rightSideIconHolderBackground': '#ec0000',
        }, 
        'post': {
            'leftSideBackgroundColor': '#f49e00',
            'rightSideSectionTitleColor': '#1781e3',
            'rightSideIconHolderBackground': '#a51728',
        }, 
        'juliusbaer': {
            'leftSideBackgroundColor': '#0000ee',
            'rightSideSectionTitleColor': '#1781e3',
            'rightSideIconHolderBackground': '#a51728',
        }, 
        'roche': {
            'leftSideBackgroundColor': '#d0b1b9',
            'rightSideSectionTitleColor': '#1781e3',
            'rightSideIconHolderBackground': '#a51728',
        }, 
        'apple': {
            'leftSideBackgroundColor': '#33333333',
            'rightSideSectionTitleColor': '#1d1d1f',
            'rightSideIconHolderBackground': '#161617cc',
        },
        'ubs': {
            'leftSideBackgroundColor': '#e0e0e0',
            'rightSideSectionTitleColor': '#d82021',
            'rightSideIconHolderBackground': '#e60000',
        },
    }
    leftSideBackgroundColor: Observable<string>;
    rightSideSectionTitleColor: Observable<string>;
    rightSideIconHolderBackground: Observable<string>;


    fullStackDeveloper = 'Application Developer Senior Analyst'
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
        phone: "private",
        github: 'https://DragoljubTHB.com/',
        linkedin: 'https://www.linkedin.com/in/dragoljub-milasinovic-7a109949/'
    }
    experiences = [
        /*
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
        },*/
        {
            tags: [this.fullStackDeveloper, this.devOpsEngineer, this.dataScientist],
            title: this.fullStackDeveloper,
            company: 'Accenture',
            companyBrand: 'https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem-700x394.png',
            fromDate: {
                year: '2020',
                month: 'June'
            },
            toDate: 'Present',
            period: '3.5 yr.',
            // tslint:disable-next-line:max-line-length
            description: 
            '<div ><p>'+
            'I have extensive experience in client consultation, design, and implementation of cloud-native architecture. I have delivered an omnichannel experience via SAFe organization, and been responsible for full-stack development and its delivery. I have supported tech leads with innovation and design decisions.</p><p>Key Skills:</p><ul><li>Cloud-native architecture design and implementation</li><li>Full-stack development</li><li>SAFe</li><li>DevOps/MLOps</li></ul><p>Professional Experience:</p><ul><li>Consulted with clients on software design and implemented cloud-native architecture, resulting in an omnichannel experience delivered via SAFe organization.</li><li>As a full-stack developer, I was responsible for the design, development, and delivery of software solutions.</li><li>Supported tech leads with innovation and design decisions, using my expertise in cloud-native architecture and related technologies.</li><li>Analyzed specifications and implemented solutions that supported a cloud-native approach, using domain-specific languages, XML schema definition, and fine granular validation frameworks.</li><li>Adapted existing DevOps code for infrastructure (Kubernetes, Jenkins, etc.) to meet project needs.</li><li>Served as a go-to person for many "how to" topics related to architecture and Ops.</li></ul></div>'
            /*
            '<p>Client consultation, design and its implementation on cloud native architecture:</p>'+
            '<p>Omnichannel experience delivered via SAFe organization.</p>' +
            '<p>Responsible for full stack development and it\'s delivery. Supported tech leads with innovation and design decisions.</p>'+
            '<p>Analyse specifications, conceive and implement solutions supporting a cloud native approach.</p>' +
            '<p>Used Domain Specific Languages, XML Schema Definition, fine granular validation framework.</p>' +
            '<p>Used and adapted the existing DevOps code for infrastructure i.e. Kubernetes, Jenkins etc.</p>' +
            '<p>A go to person for many "how to" topics regarding architecture and Ops.</p>'
            */
        },
        {
            tags: [this.dataScientist, this.fullStackDeveloper, this.devOpsEngineer],
            title: 'Research & Development Specialist',
            company: 'German Interior Affairs Institution',
            companyBrand: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/BMI_Logo.svg',
            fromDate: {
                year: '2019',
                month: 'Sept'
            },
            toDate: 'Jul 2020',
            period: '1 yr.',
            // tslint:disable-next-line:max-line-length
            description: 
            '<div><p>'+
            'I have a strong background in analyzing, researching, and developing methods for computing security measures from log files. I have also successfully built a virtual laboratory with many virtual machines executing different roles in scenarios and monitoring via a SIEM virtual machine. Additionally, I have applied AI-driven penetration testing, specifically Actor-Critic Reinforcement learning, and utilized Natural Language Processing techniques such as Co-reference resolution to extract meaning and entity references.</p><p>Key Skills:</p><ul><li>Security analysis and research</li><li>Log file analysis</li><li>Virtual laboratory design and implementation</li><li>AI-driven penetration testing</li><li>Reinforcement learning</li><li>Natural Language Processing</li><li>Co-reference resolution</li></ul><p>Professional Experience:</p><ul><li>Conducted extensive analysis and research to develop innovative methods for computing security measures from log files.</li><li>Successfully built and implemented a virtual laboratory with multiple virtual machines executing various roles and monitored via a SIEM virtual machine.</li><li>Applied AI-driven penetration testing using Actor-Critic Reinforcement learning to assess and improve system security.</li><li>Utilized Natural Language Processing techniques, such as Co-reference resolution, to extract meaning and entity references from logs and other sources.</li><li>Continuously evaluated and improved security measures to maintain a high level of protection against potential threats.</li></ul></div>'
            /*
            '<p>Analysis, research and development of methods for computing security measures out of logfiles.</p>' +
                '<p>Virtual laboratory was built. ( Many virtual machines executing different roles in scenarios and monitoring via a SIEM virtual machine )</p>' +
                '<p>Applied AI driven penetration testing. ( Actor-Critic Reinforcement learning ).</p>' +
                '<p>Applied Natural Language Processing to extract meaning and entity references. ( Co-reference resolution ).</p>'
                */
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
            period: '.5 yr.',
            // tslint:disable-next-line:max-line-length
            description: 
            '<div><p>'+
            'I have extensive experience in designing and developing programming tasks for students on Quantum computing using IBM Qiskit.</p>'+
            '<p>Key Skills:</p><ul><li>Quantum computing</li><li>IBM Qiskit</li><li>Programming task design and development</li><li>Education and training</li><li>Curriculum development</li></ul><p>Professional Experience:</p><ul><li>Designed and developed programming tasks using IBM Qiskit for students on Quantum computing.</li><li>Provided education and training to students on Quantum computing and programming tasks using IBM Qiskit.</li><li>Developed and improved curriculum for students to enhance their understanding of Quantum computing and its applications.</li><li>Collaborated with academic institutions and industry partners to incorporate cutting-edge technology and techniques into the Quantum computing curriculum.</li><li>Evaluated and assessed student performance to ensure the effectiveness of the programming tasks and curriculum.</li></ul></div>'
            //'<p>Design and develop programming tasks for students on Quantum computing.</p>'
        },
        {
            tags: [this.dataScientist],
            title: 'Research & Development Specialist',
            company: 'Networked Assets',
            companyBrand: 'https://www.networkedassets.com/wp-content/themes/basetheme/assets/images/logo_with_text.svg',
            fromDate: {
                year: '2019',
                month: 'Jan'
            },
            toDate: 'Aug 2019',
            period: '.5 yr.',
            // tslint:disable-next-line:max-line-length
            description: 
            '<div ><p>'+
            'I specialize in conducting research on predictive maintenance for DOCSIS cable networks and automatic documentation.</p><p>Key Skills:</p><ul><li>Predictive maintenance</li><li>DOCSIS cable networks</li><li>Research methodology</li><li>Data analysis</li><li>Technical documentation</li><li>Automation</li></ul><p>Professional Experience:</p><ul><li>Conducted research on predictive maintenance for DOCSIS cable networks, using advanced data analysis techniques to identify potential issues before they occur.</li><li>Developed and implemented innovative solutions for automatic documentation, streamlining the process and reducing manual labor requirements.</li><li>Utilized a variety of research methodologies, including experimental design and statistical analysis, to analyze data and draw insights.</li><li>Generated technical documentation to communicate research findings and recommendations to stakeholders and team members.</li><li>Leveraged automation tools to improve efficiency and accuracy in research and documentation processes.</li><li>Collaborated with cross-functional teams, including engineers and product managers, to develop and implement solutions for predictive maintenance and automatic documentation.</li></ul></div>'
            //'<p>Research on predictive maintenance for DOCSIS cable networks and automatic documentation.</p>'
        },
        {
            tags: [this.fullStackDeveloper],
            title: 'Front-End Developer',
            company: 'ORCA Geoservices',
            companyBrand: 'https://media.licdn.com/dms/image/C4E0BAQEWB5HB1m7cGw/company-logo_200_200/0/1647440727352?e=2147483647&v=beta&t=yNckgo4Iv31TvNFqjdmKijfIS_2ZyfMtWE3GOdk8aKU',
            fromDate: {
                year: '2017',
                month: 'Feb'
            },
            toDate: 'Jan 2019',
            period: '2 yr.',
            // tslint:disable-next-line:max-line-length
            description: 
            '<div><p>'+
            'As an Angular Front-End Developer, I specialize in developing front-end applications that support goods controlling processes around the globe.</p><p>Key Skills:</p><ul><li>Angular framework</li><li>Front-end development</li><li>Web development</li><li>User interface design</li><li>Cross-functional collaboration</li><li>Problem-solving</li></ul><p>Professional Experience:</p><ul><li>Developed front-end applications using the Angular framework to support goods controlling processes around the globe.</li><li>Collaborated with cross-functional teams, including designers and back-end developers, to deliver high-quality user interfaces and seamless user experiences.</li><li>Utilized a variety of web development tools and technologies, including HTML, CSS, and JavaScript, to create dynamic and responsive user interfaces.</li><li>Developed and implemented user interface designs that meet user needs and align with business goals.</li><li>Conducted thorough testing and debugging of front-end applications to ensure they meet quality standards and functional requirements.</li><li>Demonstrated strong problem-solving skills and the ability to identify and resolve issues in a timely and efficient manner.</li></ul></div>'
            
            //'<p>Develop mainly front end applications supporting goods controlling processes around the globe.</p>'
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
