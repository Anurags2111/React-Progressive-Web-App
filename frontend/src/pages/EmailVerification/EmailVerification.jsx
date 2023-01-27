import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import classes from '../../sass/EmailVerification/EmailVerification.module.scss'
import Header1 from '../../components/Header1/Header1'

import { Box, Grid } from "@mui/material"
import { ThemeProvider, Typography } from '@mui/material';
import MaterialTheme from '../../config/MaterialTheme'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {LoadingButton} from '@mui/lab'
import MaterialFormField from '../../components/MaterialFormField/MaterialFormField'

const EmailVerification = props => {
    const navigate = useNavigate()
    
    const INITIAL_FORM_STATE = {
        email: ''
    }

    const FORM_VALIDATION = Yup.object().shape({
        email: Yup.string()
          .email('Please use a valid mail address.')
          .required('Required Field')
        }
    )

    const [load, setLoad] = useState(false)

    const handleSubmit = () => {
        setLoad(true)
        setTimeout(() => {
            navigate('/enter-email-code')
        }, "1500")
        
    }

    return <Fragment>
        <ThemeProvider theme={MaterialTheme}>
            <Grid container className={classes.muiGrid}>
                <Box className={classes.muiBox} display="flex" flexDirection='column'>
                    <Box className={classes.muiHeader} display="flex">
                        {/* <Header1/> */}
                    </Box>
                    <Box className={classes.muiTitle}><Typography variant="h1">Email Verification</Typography></Box>
                    <Box className={classes.muiDescription}><Typography variant="body1">Enter an email you regularly access. It may be used for additional verification during login to sites and services.</Typography></Box>
                    

                    <Formik initialValues={{...INITIAL_FORM_STATE}} validationSchema={FORM_VALIDATION}
                        onSubmit={handleSubmit}>
                        <Form>
                            <Box className={classes.muiForm}>
                                <Typography variant="body1">
                                    <MaterialFormField name="email" label="Email Address" />
                                </Typography>
                            </Box>
                            <Box className={classes.muiFooter} display="flex" flexDirection='column-reverse'>
                                <LoadingButton type='submit' 
                                loading={load} 
                                variant='contained' 
                                color='primary'
                                fullWidth>
                                    NEXT
                                </LoadingButton>
                            </Box>
                        </Form>
                    </Formik>


                </Box>
            </Grid>
        </ThemeProvider>
    </Fragment>
}

export default EmailVerification