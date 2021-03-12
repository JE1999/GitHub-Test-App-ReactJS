import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';

import { IProps } from './IProps'
import { useStyles } from './Styles'

export const ScrollTop = (props: IProps) => {
    
    const { children, window } = props;

    const classes = useStyles();

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
  
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor',);
  
        if(anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
  
    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}