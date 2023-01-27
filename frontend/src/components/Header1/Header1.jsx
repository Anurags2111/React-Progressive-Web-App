import {Fragment} from 'react'
import { Box, ThemeProvider, Typography, Divider } from '@mui/material';
import MaterialTheme from '../../config/MaterialTheme';
import classes from './Header1.module.scss'

const Header1 = props => {
  return <Fragment>
    <ThemeProvider theme={MaterialTheme}>
      <Box className={classes.muiBox} display="flex" flexDirection='column'>
        <Box className={classes.muiBox1} display="flex" flexDirection='row' justifyContent='center'>
            <Box alignSelf='center'><Typography variant="body1">Account#1</Typography></Box>
        </Box>
        <Divider style={{ background: 'lightgray' }}/>
      </Box>
    </ThemeProvider>
  </Fragment>

}

export default Header1