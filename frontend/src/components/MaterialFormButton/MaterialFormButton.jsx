import { Button, ThemeProvider } from '@mui/material'
import { useFormikContext } from 'formik';
import MaterialTheme from '../../config/MaterialTheme';

import classes from './MaterialFormButton.module.scss'

const MaterialFormButton = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    large: true,
    onClick: handleSubmit
  }

  return (
    <ThemeProvider theme={MaterialTheme}>

        <Button className={classes.muiButton}
        {...configButton}
        >
        {children}
        </Button>

    </ThemeProvider>
  );
};

export default MaterialFormButton