import { Fragment, useState, useRef, useEffect } from "react";
import Camera from '../../assets/images/Camera.svg'
import LightBulb from '../../assets/images/LightBulb.svg'

import { Box, Button, Grid, ThemeProvider, Typography } from '@mui/material';
import MaterialTheme from '../../config/MaterialTheme'
import classes from '../../sass/FaceAuthentication/BackID.module.scss'

import { useNavigate } from 'react-router-dom'

const BackID = props => {
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
        navigate('/face-guide') 
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
					<Box className={classes.muiHeader} display="flex">
						{/* <Header1 redirectTo='/credentials'/> */}
					</Box>

					{
                        hasPhoto ?
						<Fragment>
                            <Box className={classes.muiTitle}><Typography variant="h1"></Typography></Box>
					        <Box className={classes.muiDescription}><Typography variant="body1"></Typography></Box>

							<Box className={classes.muiFormInvisible}></Box>
							<Box className={classes.muiFooter} display="flex" flexDirection='column-reverse'>
                            	<Box><Button onClick={moveNext} color='primary' fullWidth variant='contained'>NEXT</Button></Box>
                                <Box className={classes.secondaryButton}><Button onClick={closePhoto} color='secondary' fullWidth variant='contained'>TRY AGAIN</Button></Box>
                        	</Box>
						</Fragment> :

						<Fragment>
                            <Box className={classes.muiTitle}><Typography variant="h1">Verify your ID</Typography></Box>
					        <Box className={classes.muiDescription}><Typography variant="body1">Frame back of your ID</Typography></Box>

							<Box className={classes.muiForm} onClick={takePhoto}>
                        		<img src={Camera} alt="Camera"/>
                    		</Box>
							<Box className={classes.muiFooter} display="flex">
								<img src={LightBulb} alt="Camera"/>
							</Box>
						</Fragment>
                    }
				</Box>
			</Box>
        </Grid>
    </ThemeProvider>
  </Fragment>
}

export default BackID