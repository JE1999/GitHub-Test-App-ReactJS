import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

interface IPropsGridContainer {
    children: React.ReactNode
}

type SIZES = 'auto'|true|1|2|3|4|5|6|7|8|9|10|11|12;

interface IPropsGridItem {
    sm?: SIZES;
    md?: SIZES;
    lg?: SIZES;
    children: React.ReactNode
}

export const GridContainer = ({children}: IPropsGridContainer) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                {children}
            </Grid>
        </div>
    )
}

export const GridItem = (props: IPropsGridItem) => {

    const { sm=12, md=6, lg=3, children } = props

    return (
        <Grid item xs={12} sm={sm} md={md} lg={lg}>
            {children}
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
})); 