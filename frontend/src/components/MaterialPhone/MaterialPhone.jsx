import { Fragment, useState } from 'react';
import classes from './MaterialPhone.module.scss';
import { TextField, Box } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const MaterialPhone = props => {

	const [countryCode, setCountryCode] = useState('1')

	const codeHandler = event => {
		setCountryCode(event.target.value)
	}
	
	return <Fragment>
		<Box display='flex' className={classes.bigBox}>
			<Box className={classes.telBox} display='flex' flexDirection='column-reverse' alignItems='flex-end'>
				<Box className={classes.selectBox} display='flex' flexDirection='column-reverse'>
					<Box className={classes.FlagCumArrow} display='flex'>
						
						<Box className={classes.FlagImage}>
							<img src='https://flagpedia.net/data/flags/h80/us.webp' alt="country-flag" className={classes.flagImg} />
							<select className={classes.countryPopUp}
								id="country"
								onChange={codeHandler}
							>
								<option data-countryCode="AF" value="93">
									Afghanistan (+93)
								</option>
								<option data-countryCode="AL" value="355">
									Albania (+355)
								</option>
								<option data-countryCode="DZ" value="213">
									Algeria (+213)
								</option>
								<option data-countryCode="TV" value="688">
									Tuvalu (+688)
								</option>
								<option data-countryCode="ZW" value="263">
									Zimbabwe (+263)
								</option>
							</select>
						</Box>

						<Box>
							<ArrowDropDownIcon/>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className={classes.muiTextField}>
				<TextField className={classes.tel}
				variant='standard'
				label='Mobile number'
				fullWidth
				defaultValue={`+${countryCode}`}
				/>
			</Box>
		</Box>
	</Fragment>
}

export default MaterialPhone