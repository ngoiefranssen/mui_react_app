import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import { Box, Stack, styled } from '@mui/system';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import DateRangeIcon from '@mui/icons-material/DateRange';

const ModalStyled = styled(Modal)({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const UserBox = styled(Box)({
    display:'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
});

const Add = () => {
  
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip
                onClick={ (e) => setOpen(true)}
                title="Delete"
                sx={{ position:'fixed', bottom:20, left: { xs: 'calc(50% - 25px)', md:30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <ModalStyled
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    bgcolor={"background.default"}
                    color={'text.primary'} p={3}
                    borderRadius={5}
                >
                    <Typography variant='h6' color='gray' textAlign='center'>
                        Create post
                    </Typography>
                    <UserBox>
                    <Avatar
                        src='https://www.w3schools.com/howto/img_avatar2.png'
                        sx={{ width: 30, height: 30 }}
                    />
                    <Typography variant='span' fontWeight={500}>Julia</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width:'100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3  }>
                        <SentimentVerySatisfiedIcon color='primary'/>
                        <ImageIcon color='secondary'/>
                        <VideoCameraBackIcon color='success'/>
                        <PersonAddIcon color='error'/>
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{ width: '100px' }}>
                            <DateRangeIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
            </ModalStyled>
        </>
    );
};

export default Add
