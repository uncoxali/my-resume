import BikingIcon from 'assets/svg/biking.svg';
import MusicIcon from 'assets/svg/music.svg';
import PhotographyIcon from 'assets/svg/photography.svg';
import SearchIcon from 'assets/svg/search.svg';
import TravelingIcon from 'assets/svg/traveling.svg';
import UserIcon from 'assets/svg/user.svg';
import { HobiItemProps } from 'components/pages/resume/hobiItem';
import { SkillItemProps } from 'components/pages/resume/skillItem';

export const WorkExprience = [
    {
        'title': 'Head of front-end development',
        'date': 'Feb 2021 - Jun 2021 · 5 mos',
        'location': 'Tehran, Iran',
        'subTitle': 'Cloudware',
        'description':
            'The company specializes in outsourcing web applications to businesses. As a full-stack developer.',
    },
    {
        'title': 'Senior front-end developer',
        'date': 'May 2021 - Present · 10 mos',
        'location': 'Tehran, Iran',
        'subTitle': 'Sina Idea Graph',
        'description':
            'Idea Negar Sina Company was established in 2018 in the Internet industry / e-commerce / online services, medical services and health. In the field of consulting services in management and information technology, he is an activity and developer of mobile applications.',
    },
    {
        'title': 'Senior front-end developer',
        'date': 'Sep 2021 - Present · 6 mos',
        'location': 'Dubai, United Arab Emirates',
        'subTitle': 'Dream Come True Information Technology',
        'description':
            'Dream Come True has provided innovative ideas and income opportunities to live a life in balance.',
    },
];
export const Skills: SkillItemProps[] = [
    {
        title: 'Javascript/Typeccript',
        subTitle: 'Mid-Senior',
    },
    {
        title: 'React/Next.js',
        subTitle: 'Mid-Senior',
    },
    {
        title: 'React Native',
        subTitle: 'Mid-Senior',
    },
    {
        title: 'Nodejs',
        subTitle: 'Mid-Senior',
    },
    {
        title: 'GraphQL/Rest',
    },
    {
        title: 'CSS/Tailwind',
    },
    {
        title: 'Wordpress',
    },
    { title: 'Team Management' },
];
export const hobies: HobiItemProps[] = [
    {
        title: 'Research',
        icon: SearchIcon,
    },
    {
        title: 'Traveling',

        icon: TravelingIcon,
    },
    {
        title: 'Photography',

        icon: PhotographyIcon,
    },
    {
        title: 'Music',

        icon: MusicIcon,
    },
    {
        title: 'Biking',

        icon: BikingIcon,
    },
    {
        title: 'Aid Working',

        icon: UserIcon,
    },
];
