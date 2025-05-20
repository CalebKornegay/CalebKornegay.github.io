import { IconBaseProps} from 'react-icons';
import { DiGithubAlt } from 'react-icons/di';

export type homelink = {
    name: string,
    href: string
};

export type hotlink = {
    resource: string,
    icon: React.FC<IconBaseProps>
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
        resource: 'https://github.com/calebkornegay',
        icon: DiGithubAlt as React.FC<IconBaseProps>
    }
];
