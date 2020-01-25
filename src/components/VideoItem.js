import React from 'react';

import { Grid , Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect })=>{
    return (
        <Grid item xs={15}>
            <Paper style={{ display: "flex" , alignItems: "center" , cursor: "pointer" }} onClick={()=> onVideoSelect(video)}>
                <img style={{ marginRight: "10px"}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle2">
                    <b>{video.snippet.title}</b>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;