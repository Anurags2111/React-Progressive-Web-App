import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../../sass/PhoneVerification/PhoneVerification.module.scss'
import Header from '../../components/Header/Header'

import { Box, Grid } from "@mui/material"
import { ThemeProvider, Typography } from '@mui/material';
import MaterialTheme from '../../config/MaterialTheme'
import {LoadingButton} from '@mui/lab'
import MaterialPhone from '../../components/MaterialPhone/MaterialPhone'

const PhoneVerification = props => {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate('/enter-sms-code')
    }


    return <Fragment>
        <ThemeProvider theme={MaterialTheme}>
            <Grid container className={classes.muiGrid}>
                <Box className={classes.muiBox} display="flex" flexDirection='column'>
                    <Box className={classes.muiHeader} display="flex">
                        {/* <Header redirectTo='/credentials'/> */}
                    </Box>
                    <Box className={classes.muiTitle}><Typography variant="h1">Mobile number verification</Typography></Box>
                    <Box className={classes.muiDescription}><Typography variant="body1">Enter a mobile number you regularly access. It may be used for additional verification during login to sites and services.</Typography></Box>
                    <Box className={classes.muiForm} display='flex' justifyContent='space-between'>
                        <Typography variant="body1">
                            <MaterialPhone/>
                        </Typography>
                    </Box>
                    <Box className={classes.muiFooter} display="flex" flexDirection='column-reverse'>
                        <LoadingButton type='submit' variant='contained' color='primary' onClick={clickHandler}>
                            NEXT
                        </LoadingButton>
                    </Box>
                </Box>
            </Grid>
        </ThemeProvider>
    </Fragment>
}

export default PhoneVerification