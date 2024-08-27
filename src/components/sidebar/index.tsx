import { Box, Drawer, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Home, ChevronRight, ChevronLeft, AutoGraph, MenuBook, Logout} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavMenu } from '../../common/moks/navigate';
import logo  from '../../assets/images/sidebar/logo.png'

const SideBarComponent = (props: any) => {
    const [active, setActive] = useState('')
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props

    const navigateSideBar = <List>
    {NavMenu.map((item) => {
        return (
            <ListItemButton onClick={() => navigate(`${item.path}`)}>
            <ListItem key={item.id}>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
            <h2>{item.name}</h2>
            </ListItem>
            </ListItemButton>
        )
    })}
</List>

    useEffect(() => {
setActive(pathname.substring(1))
    }, [pathname])
  return (
    <Box component={'nav'}>
{isOpen && (
    <Drawer
    open={isOpen}
    onClose={() => setIsOpen(false)}
    variant='persistent'
    anchor='left'
    sx={{width: drawerWidth,
        '& .MuiDrawer-paper': {
            color: '232323',
            backgroundColor: '898989',
            boxSizing: 'border-box',
            width: drawerWidth
        }
    }}
    >
        <Box width={'100%'}>
           <Box>
           <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
<Box display={'flex'} alignItems={'center'} gap={'10px'} padding={'25px '}>
    <img src={logo} width={50}/>
    <Typography variant='h4'>Demo</Typography>
</Box>
{!isNonMobile && (
    <IconButton onClick={() => setIsOpen(!isOpen)}>
        <ChevronLeft/>
    </IconButton>
)}
</Box>
           </Box>
        {navigateSideBar}
        </Box>
    </Drawer>
)}
    </Box>
  )
}

export default SideBarComponent