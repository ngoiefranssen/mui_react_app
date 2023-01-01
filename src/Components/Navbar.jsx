import { Pets } from '@mui/icons-material';
import { AppBar, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import { borderRadius } from '@mui/system';
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
  // backgroundColor: 'white'
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <ToolbarStyled>
        <Toolbar>
          <Typography
            variant='h6'
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            MUI APP
          </Typography>
          <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Search>search</Search>
        </Toolbar>
        <Icons><InputBase placeholder='Search....' /></Icons>
        <Badge badgeContent={4} color="error">
          <MailIcon  />
        </Badge>
      </ToolbarStyled>
    </AppBar>
  )
}

export default Navbar
