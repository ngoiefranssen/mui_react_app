import { Pets } from '@mui/icons-material';
import { 
  AppBar, 
  Avatar, 
  Badge, 
  Box, 
  InputBase, 
  styled, 
  Toolbar, 
  Typography 
} from '@mui/material'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'

const ToolbarStyled = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <ToolbarStyled>
        {/* <Toolbar> */}
          <Typography
            variant='h6'
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            MUI APP
          </Typography>
          <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Search>search</Search>
        {/* </Toolbar> */}
        <Icons>
          <InputBase placeholder='Search....' />
          <Badge badgeContent={4} color="error">
            <MailIcon  />
          </Badge>
          <Badge badgeContent={2} color="error">
            <CircleNotificationsIcon  />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://www.w3schools.com/howto/img_avatar2.png' />
        </Icons>  
      </ToolbarStyled>
    </AppBar>
  )
}

export default Navbar
