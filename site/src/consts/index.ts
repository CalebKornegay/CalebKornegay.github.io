import { IconBaseProps} from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { TbFileDownload } from 'react-icons/tb';

export type homelink = {
    name: string,
    href: string
};

export type hotlink = {
    resource: string,
    icon: React.FC<IconBaseProps>,
    icon_color: string
};

export const homelinks: homelink[]  = [
    {
        name: 'Home',
        href: '#home'
    },
    {
        name: 'Interests',
        href: '#interests'
    },
    {
        name: 'Projects',
        href: '#projects'
    },
    {
        name: 'Experience',
        href: '#experience',
    },
    {
        name: 'Skills',
        href: '#skills'
    }
];

export const hotlinks = [
    {
        resource: '/Resume.docx',
        icon: TbFileDownload as React.FC<IconBaseProps>,
        icon_color: '#121212'
    },
    {
        resource: 'https://github.com/calebkornegay',
        icon: FaGithub as React.FC<IconBaseProps>,
        icon_color: '#000000'
    },
    {
        resource: 'https://www.linkedin.com/in/caleb-kornegay-77923818a/',
        icon: FaLinkedin as React.FC<IconBaseProps>,
        icon_color: '#0077B5'
    }
];
