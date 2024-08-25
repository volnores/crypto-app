import { Box, Grid, IconButton, InputBase } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { useTheme } from '@emotion/react';


const TopBarComponent = () => {
    const user = 'Serj'
    const theme = useTheme()

  return (
    <Box display={'flex'} justifyContent={'space-between'} px={'32px'} py={'24px'}>
        <Grid>Weclome, {user}</Grid>
        <Box display={'flex'}>
            <Grid sx={{pr: '37px', borderRight: '1px solid #999'}}>
                <IconButton sx={{mr: '45px'}}>
                  <Brightness2Icon/>
                  </IconButton>
                  <IconButton>
                  <NotificationsNoneIcon/>
                  </IconButton>
                  </Grid>
                  <Grid  sx={{
                    display: 'flex',
                    backgroundColor: '#00000020',
                    borderRadius: '8px',
                    ml: '20px'
                  }}>
                    <IconButton>
                      <SearchIcon/>
                    </IconButton>
                    <InputBase placeholder='Поиск' sx={{px: '18px', py: '12px'}} />
                    </Grid>               
          
        </Box>
    </Box>
  )
}

export default TopBarComponent