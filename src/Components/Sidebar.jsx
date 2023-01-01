import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import PagesIcon from '@mui/icons-material/Pages';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'

const Sidebar = ({mode, setMode}) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box position='fixed'>
          <List>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#home'>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#page'>
                <ListItemIcon>
                  <PagesIcon />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#group'>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#marketplace'>
                <ListItemIcon>
                  <BookmarkIcon />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#friend'>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#simple_list'>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Setting" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#profile'>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#profile'>
                <ListItemIcon>
                  <ModeNightIcon />
                </ListItemIcon>
                <Switch onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
    </Box>
  );
};

export default Sidebar
