import React, { useState, useEffect } from 'react'
import { Paper, Typography, Button, TextField } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useSelector, useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts.js';

import useStyles from './styles.js';

 const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setPostData({...postData, [key]: key === 'tags' ? value.split(',') : value})
      }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === null) {
            dispatch(createPost(postData));
        }
        else {
            dispatch(updatePost(currentId, postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant="h6" >{ currentId ? "Edit" : "Create" } Content</Typography>
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

export default Form;