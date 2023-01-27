import { Fragment } from "react";
import YourID from '../../assets/images/YourID.svg'
import FacePhoto from '../../assets/images/FacePhoto.svg'

import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import MaterialTheme from '../../config/MaterialTheme'
import classes from '../../sass/FaceAuthentication/FaceGuide.module.scss'

import Header1 from '../../components/Header1/Header1'
import MaterialButton from "../../components/MaterialButton/MaterialButton";


const FaceGuide = props => {
  return <Fragment>
    <ThemeProvider theme={MaterialTheme}>
        <Grid container className={classes.muiGrid}>
            <Box className={classes.muiBox} display="flex" flexDirection='column'>
                <Box className={classes.muiHeader} display="flex">
                    {/* <Header1 redirectTo='/email-code'/> */}
                </Box>
                <Box className={classes.muiTitle}><Typography variant="h1">Face authentication</Typography></Box>
                <Box className={classes.muiDescription}><Typography variant="body1">To verify you as the rightful owner of the ID, please provide a video selfie in the next step to  match it with the face photo in your ID</Typography></Box>
                <Box className={classes.muiForm}><img src={FacePhoto} alt="FacePhoto"/></Box>
                <Box className={classes.muiFooter} display="flex" flexDirection='column-reverse'>
                    <MaterialButton  buttonColor='primary' redirectTo={'/capture'} buttonContent='PROCEED'/>
                </Box>
            </Box>
        </Grid>
    </ThemeProvider>
  </Fragment>
}

export default FaceGuide