import {Fragment} from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, ThemeProvider, Typography, Divider } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import MaterialTheme from '../../config/MaterialTheme';
import classes from './Header.module.scss'

const Header = props => {
  const navigate = useNavigate()
  const handlePageChange = () => {
    navigate(props.redirectTo) 
  }

  return <Fragment>
    <ThemeProvider theme={MaterialTheme}>
      <Box className={classes.muiBox} display="flex" flexDirection='column'>
        <Box className={classes.arrowIcon} alignSelf='flex-start'><ArrowCircleLeftOutlinedIcon onClick={handlePageChange} fontSize='large'/></Box>
        <Box className={classes.muiBox1} display="flex" flexDirection='row' justifyContent='center'>
            <Box alignSelf='center'><Typography variant="body1">Account#1</Typography></Box>
        </Box>
        <Divider style={{ background: 'lightgray' }}/>
      </Box>
    </ThemeProvider>
  </Fragment>

}

export default Header