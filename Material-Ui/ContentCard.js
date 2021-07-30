import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default function ContentCard(props) {
const {title, price, description, avatarUrl, imageUrl} = props;
    return (
        <Card>
                 <CardHeader avatar={ <Avatar src={avatarUrl} /> } action={<IconButton> <ShareIcon/>  </IconButton>} title={title} subheader={price} />

                 <CardMedia style={{height:"400px", width:"400px",  objectFit:'cover'}} image={imageUrl}      />

                <CardContent>
                    <Typography variant="p">
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
        <Button>Buy Now</Button>
        <Button>Wish List</Button>

                </CardActions>
 
        </Card>
    )
}
