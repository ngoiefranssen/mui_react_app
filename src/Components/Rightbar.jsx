import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react'

const Rightbar = () => {
  return (
    <Box
        flex={2}
        p={2}
        sx={{ display: { xs: 'none', sm: 'block'} }}
    >
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>
          Online Friend
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://pixlr.com/images/index/remove-bg.webp" 
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_3ELUAraSJdzdVvyOYEfK2ow6D0v7vKjCFEfI_9PRxw8rJ76yPpc801zXcENooNy5Pc&usqp=CAU" 
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxI8YHdVJkd_xVyowRuLA5PyYSWaPsnpdx2QwDK-9uioRdSUkooAxZ-bChg71igj_GGU&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXdBQVQfcx3Rj66DjxqAMO4PrkST4kirYRcJQ10a-R04MgbpqKrFmHmkcDpuBU6illI8&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRGTj85-G-LJOSC6MC35wSkiRhS3LB3KcGj6KBAvy2BKqUm6ZIe2GI04xbiGFH0A5KU4&usqp=CAU"
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
          <ImageList cols={3} rowHeight={100} gap={5} >
            <ImageListItem>
              <img
                src='https://images.unsplash.com/photo-1567306301408-9b74779a11af'
                alt=''
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src='https://images.unsplash.com/photo-1471357674240-e1a485acb3e1'
                alt=''
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'
                alt=''
              />
            </ImageListItem>
          </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItem>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItem>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItem>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItem>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItem>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItem>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
        </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar;
