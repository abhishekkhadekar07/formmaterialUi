import React, { useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core/';
import { useDispatch } from 'react-redux';


import useStyles from './styles';

const PersonaldetailsInfo = ({ }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (

        <>

            <Card className={classes.card}>
                <CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="{post.title}" />
                <div className={classes.overlay}>
                    <Typography variant="h6">abhishek</Typography>
                </div>
                <div className={classes.overlay2}>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">title123</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">message</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                </CardActions>
            </Card>
        </>
    );
};

export default PersonaldetailsInfo;
