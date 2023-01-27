import { Fragment } from "react";
import SuccessTick from '../../assets/images/SuccessTick.svg'

import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import MaterialTheme from '../../config/MaterialTheme'
import classes from '../../sass/FaceAuthentication/FaceIDVerified.module.scss'

import Header1 from "../../components/Header1/Header1";
import MaterialButton from "../../components/MaterialButton/MaterialButton";
import { motion } from 'framer-motion'

const FaceIDVerified = props => {
  return <Fragment>
    <ThemeProvider theme={MaterialTheme}>
        <Grid container className={classes.muiGrid}>
            <Box className={classes.muiBox} display="flex" flexDirection='column'>
                <Box className={classes.muiHeader} display="flex">
                    {/* <Header1 redirectTo='/email-code'/> */}
                </Box>
                <Box className={classes.muiTitle}><Typography variant="h1">Congratulations!</Typography></Box>
                <Box className={classes.muiDescription}><Typography variant="body1">You have a veified ID credential now</Typography></Box>
                <motion.Box className={classes.muiForm} animate={{scale:1}} initial={{scale:0}}><img src={SuccessTick} alt="TickMark"/></motion.Box>
                <Box className={classes.muiFooter} display="flex" flexDirection='column-reverse'>
                    <MaterialButton  buttonColor='primary' redirectTo={'/'} buttonContent='DONE'/>
                </Box>
            </Box>
        </Grid>
    </ThemeProvider>
  </Fragment>
}

export default FaceIDVerified