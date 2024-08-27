import React, { useState } from 'react'
import { ILayout } from '../../common/types/layout'
import TopBarComponent from '../topbar'
import { useLocation } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import SideBarComponent from '../sidebar'

const LayoutComponent = ({children}: ILayout) => {
  const [isOpen, setIsOpen] = useState(true)
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const location = useLocation()
  return (
    location.pathname === '/login' || location.pathname === '/register' ? (<>
      {children}
      </>) : (
        <Box display={'flex'} justifyContent={'space-between'} 
         width={'100%'}
          height={'100%'}>
            <SideBarComponent 
            isNonMobile={isNonMobile}
            drawerWidth='250'
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            />
<Box  >
<TopBarComponent />
{children}
</Box>
        </Box>
  )
)}

export default LayoutComponent