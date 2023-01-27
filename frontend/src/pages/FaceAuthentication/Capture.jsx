import {useRef, useEffect, useState, Fragment} from 'react'
import { Box, Grid, Button, ThemeProvider } from '@mui/material';
import MaterialTheme from '../../config/MaterialTheme'
import {LoadingButton} from '@mui/lab'
import classes from '../../sass/FaceAuthentication/Capture.module.scss'
import '../../index.css'
import FaceOutline from '../../assets/images/FaceOutline.svg'

import { useNavigate } from 'react-router-dom'

const Capture = () => {
    const navigate = useNavigate()
    const videoRef = useRef(null)
    const photoRef = useRef(null)
    
    const [hasPhoto, setHasPhoto] = useState(false)


    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia({
            video: {width: 1080, height: 1920}
        })
        .then(stream => {
            let video = videoRef.current
            video.srcObject = stream
            video.play()
        })
        .catch(err => {
            console.error(err)
        })
    }

    const takePhoto = () => {
        const width = 1080
        const height = width / (16/9)
        
        let video = videoRef.current
        let photo = photoRef.current

        photo.width = width
        photo.height = height

        let ctx = photo.getContext('2d')
        ctx.drawImage(video, 0, 0, width, height)
        setHasPhoto(true)
    }

    const closePhoto = () => {
        let photo = photoRef.current
        let ctx = photo.getContext('2d')
        ctx.clearRect(0, 0, photo.width, photo.height)
        setHasPhoto(false)

    }

    useEffect(() => {
        getVideo()
    }, [videoRef])

    const moveNext = () => {
        navigate('/faceID-verified') 
    }

    return <Fragment>
      <ThemeProvider theme={MaterialTheme}>
          <Grid container className={classes.muiGrid}>

            <div className={classes.camera}>
                <video ref={videoRef}></video>
            </div>

            <div className={'cameraResult ' + (hasPhoto ? 'hasPhoto' : '')}>
                <canvas ref={photoRef}></canvas>
            </div>
            
            
  
              <Box className={classes.muiBigBox} display="flex" flexDirection='column'>
                <Box className={classes.muiBox} display="flex" flexDirection='column'>
                    <Box className={classes.muiHeader} display="flex"></Box>

                    {
                        hasPhoto ?
                        <Fragment>
                            <Box className={classes.photoFrame}></Box>
                            <Box className={classes.muiFooter} display="flex" flexDirection='column-reverse'>
                                <Box><Button onClick={moveNext} color='primary' fullWidth variant='contained'>NEXT</Button></Box>
                                <Box className={classes.secondaryButton}><Button onClick={closePhoto} color='secondary' fullWidth variant='contained'>TRY AGAIN</Button></Box>
                            </Box>
                        </Fragment> :
                        <Fragment>
                            <Box className={classes.photoFrame}>
                                <img src={FaceOutline} alt="FaceOutline"/>
                            </Box>
                            <Box className={classes.muiFooter} display="flex" flexDirection='column-reverse'>
                                <Box><Button onClick={takePhoto} color='primary' fullWidth variant='contained'>CAPTURE</Button></Box>
                            </Box>
                        </Fragment>
                    }
                </Box>
              </Box>
          </Grid>
      </ThemeProvider>
    </Fragment>
 }

 export default Capture