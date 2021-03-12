import Button from '@material-ui/core/Button';

import { useStyles } from './Styles'


export const ButtonApp = (props: any) => {

    const classes = useStyles();

    const { 
        title='Click!', 
        type='button',
        handleClick=() => console.log('Click'),
        fullWidth= true
    } = props

    return (
        <Button 
            className={classes.button}
            variant="contained" 
            color="primary"
            size="large"
            type={type}
            onClick={handleClick}
            fullWidth={fullWidth}
        >
            {title}
        </Button>
    );
}