import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import classes from '../../sass/PhoneVerification/SMSCodeResent.module.scss'

import Header1 from '../../components/Header1/Header1'

import { Box, Grid } from "@mui/material"
import { ThemeProvider, Typography } from '@mui/material';
import MaterialTheme from '../../config/MaterialTheme'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {LoadingButton} from '@mui/lab'
import MaterialFormField from '../../components/MaterialFormField/MaterialFormField'

const SMSCodeResent = props => {

    const navigate = useNavigate()
    
    const INITIAL_FORM_STATE = {
        verificationCode: ''
    }

    const FORM_VALIDATION = Yup.object().shape({
        verificationCode: Yup.string()
        .trim()
        .matches(/^[0-9]{6,6}$/ , 'Please enter a valid code.')
        .required('Required Field')
        }
    )

    const [loadPrimary, setLoadPrimary] = useState(false)
    const [loadSecondary, setLoadSecondary] = useState(false)
    const [disablePrimary, setDisablePrimary] = useState(false)
    const [disableSecondary, setDisableSecondary] = useState(false)

    const handleSubmit = () => {
        setLoadPrimary(true)
        setDisableSecondary(true)
        setTimeout(() => {
            navigate('/phone-verified')
        }, "1500")
    }

    const handleClick = () => {
        setLoadSecondary(true)
        setDisablePrimary(true)
        setTimeout(() => {
            navigate('/front-id')
        }, "1500")
    }


    return <Fragment>
        <ThemeProvider theme={MaterialTheme}>
            <Grid container className={classes.muiGrid}>
                <Box className={classes.muiBox} display="flex" flexDirection='column'>
                    <Box className={classes.muiHeader} display="flex">
                        {/* <Header1 redirectTo='/email-code'/> */}
                    </Box>
                    <Box className={classes.muiTitle}><Typography variant="h1">Enter Verification Code</Typography></Box>
                    <Box className={classes.muiDescription}><Typography variant="body1">A 6-digit verification code has been <span className={classes.redText}>resent</span> to +1(9**) *** *671</Typography></Box>
                    
                    
                    <Formik initialValues={{...INITIAL_FORM_STATE}} validationSchema={FORM_VALIDATION}
                        onSubmit={handleSubmit}>
                        <Form>
                            <Box className={classes.muiForm}><Typography variant="body1"><MaterialFormField name="verificationCode" label="Verification Code" /></Typography></Box>
                            <Box className={classes.buttonBox} display="flex" flexDirection='column-reverse'>
                                <Box>
                                    <LoadingButton type='submit' variant='contained' color='primary'
                                        disabled={disablePrimary} 
                                        loading={loadPrimary} 
                                        fullWidth
                                        >
                                        NEXT
                                    </LoadingButton> 
                                </Box>
                                <Box className={classes.secondaryButton}>
                                    <LoadingButton variant='contained' color='secondary'
                                        onClick={handleClick} 
                                        loading={loadSecondary} 
                                        disabled={disableSecondary}
                                        fullWidth
                                        >
                                        CANCEL
                                    </LoadingButton> 
                                </Box>
                            </Box>
                        </Form>
                    </Formik>


                </Box>
            </Grid>
        </ThemeProvider>
    </Fragment>
}

export default SMSCodeResent