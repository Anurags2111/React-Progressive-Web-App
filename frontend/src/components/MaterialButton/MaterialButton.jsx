import {Fragment} from 'react'
import { Link } from "react-router-dom"
import {Button, ThemeProvider} from '@mui/material';
import MaterialTheme from '../../config/MaterialTheme'

import classes from './MaterialButton.module.scss'

const MaterialButton = props => {
  return <Fragment>
            <ThemeProvider theme={MaterialTheme}>
              <Button className={classes.muiButton}
                color={props.buttonColor}
                to={props.redirectTo}
                component={Link}
                fullWidth 
                size='large' 
                variant="contained">
                    {props.buttonContent}
              </Button>
            </ThemeProvider>
  </Fragment>
}

export default MaterialButton