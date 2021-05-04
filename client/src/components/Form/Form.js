import React, { useState } from 'react'
import useStyles from './styles.js';
import { Paper, Typography, Button, TextField } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

export default function Form() {
    const classes = useStyles();

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setPostData({...postData, [key]: key === 'tags' ? value.split(',') : value})
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

    const clear = () => {

    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant="h6" >Create Content</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={handleChange} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={handleChange} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={handleChange} />
                <TextField name="tags" variant="outlined" label="Tags (comma separated)" fullWidth value={postData.tags} onChange={handleChange} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}