import {Home, ChevronRight, ChevronLeft, AutoGraph, MenuBook, Logout} from '@mui/icons-material';

export const NavMenu = [
    {
        name: 'Home',
        icon: <Home/>,
        path: '/',
        id: 1
    },
    {
        name: 'News',
        icon: <MenuBook/>,
        path: '/news',
        id: 2
    },
    {
        name: 'Settings',
        icon: <AutoGraph/>,
        path: '/settings',
        id: 3
    },
    {
        name: 'Log Out',
        icon: <Logout/>,
        path: '/logout',
        id: 4
    },
]