import { Pets } from '@mui/icons-material';
import { 
  AppBar, 
  Avatar, 
  Badge, 
  Box, 
  InputBase, 
  Menu, 
  MenuItem, 
  styled, 
  Toolbar, 
  Typography 
} from '@mui/material'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react'

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
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')] : {
    display: 'flex'
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')] : {
    display: 'none'
  },
}));

const Navbar = () => {

  const [open, setOpen] = useState(false)

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
          <Search>
            <InputBase placeholder='Search....' />
          </Search>
        {/* </Toolbar> */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon  />
          </Badge>
          <Badge badgeContent={2} color="error">
            <CircleNotificationsIcon  />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://www.w3schools.com/howto/img_avatar2.png'
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
              sx={{ width: 30, height: 30 }}
              src='https://www.w3schools.com/howto/img_avatar2.png'
          />
          <Typography variant='span'>Julia</Typography>
        </UserBox>
      </ToolbarStyled>
      <Menu
        id="fade-menu"
        anchorOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
        open={open}
        onClose={(e) => setOpen(false)}
        transformOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
