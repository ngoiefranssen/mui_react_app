
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography, 
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'

const Post = () => {
    return(
        <Card sx={{ margin: 6 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        J
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chassimages.com%2F&psig=AOvVaw0gnprSflX9fPNvQA1csTxJ&ust=1672655159255000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPDDwpaUpvwCFQAAAAAdAAAAABAE"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Post;