import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getPosts } from './actions/posts';
import logo from './images/logo_1.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
 
 export default function App() {

     const classes = useStyles();
     const dispatch = useDispatch();

     useEffect(() => {
         dispatch(getPosts());
     }, [dispatch]);

     return (
         <Container maxWidth='lg'>
             <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={logo} alt="logo" height="40" />
                 <Typography className={classes.heading} variant="h5" align="center" >Contenty</Typography>
             </AppBar>
             <Grow in>
                 <Container>
                     <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                     </Grid>
                 </Container>
             </Grow>
         </Container>
     )
 }
 