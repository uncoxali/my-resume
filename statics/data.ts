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
        'title': 'front-end development',
        'date': 'Feb 2021 - Jun 2021 · full-time',
        'location': 'Tehran, Iran',
        'subTitle': 'Cloudware',
        'description':
            'The company specializes in outsourcing web applications to businesses. As a midd-level developer.',
    },
    {
        'title': 'midd-level front-end developer',
        'date': 'May 2021 - Present · 10 mos',
        'location': 'Tehran, Iran',
        'subTitle': 'Hamda',
        'description':
            'Website for recording purchase invoices, online sales and admin panel (React , bootstrap , react-bootstarp)',
    },
    // {
    //     'title': 'Senior front-end developer',
    //     'date': 'Sep 2021 - Present · 6 mos',
    //     'location': 'Dubai, United Arab Emirates',
    //     'subTitle': 'Dream Come True Information Technology',
    //     'description':
    //         'Dream Come True has provided innovative ideas and income opportunities to live a life in balance.',
    // },
];
export const Skills: SkillItemProps[] = [
    {
        title: 'Javascript',
        subTitle: 'Mid',
    },
    {
        title: 'Typeccript',
        subTitle: 'Mid',
    },
    {
        title: 'React.js',
        subTitle: 'Mid',
    },
    {
        title: 'Next.js',
        subTitle: 'Mid',
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
