import { Fragment, useState } from "react";
import SuccessTick from '../../assets/images/SuccessTick.svg'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import MaterialTheme from '../../config/MaterialTheme'
import classes from '../../sass/EmailVerification/EmailVerified.module.scss'

import Header1 from "../../components/Header1/Header1";
import {LoadingButton} from '@mui/lab'
import { motion } from 'framer-motion'

const EmailVerified = props => {
    const navigate = useNavigate()
    const [load, setLoad] = useState(false)

    const handleClick = () => {
        setLoad(true)
        setTimeout(() => {
            navigate('/phone-verification')
        }, "1500")
    }
    return <Fragment>
        <ThemeProvider theme={MaterialTheme}>
            <Grid container className={classes.muiGrid}>
                <Box className={classes.muiBox} display="flex" flexDirection='column'>
                    <Box className={classes.muiHeader} display="flex">
                        {/* <Header1 redirectTo='/email-code'/> */}
                    </Box>
                    <Box className={classes.muiTitle}><Typography variant="h1">Congratulations!</Typography></Box>
                    <Box className={classes.muiDescription}><Typography variant="body1">Your ID has a verified email credential now</Typography></Box>
                    <motion.Box className={classes.muiForm} animate={{scale:1}} initial={{scale:0}}><img src={SuccessTick} alt="TickMark"/></motion.Box>
                    <Box className={classes.muiFooter} display="flex" flexDirection='column-reverse'>
                        <LoadingButton onClick={handleClick} loading={load} variant='contained' color='primary'>
                            NEXT
                        </LoadingButton> 
                    </Box>
                </Box>
            </Grid>
        </ThemeProvider>
  </Fragment>
}

export default EmailVerified