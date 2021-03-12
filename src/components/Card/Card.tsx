import { Modal } from '../Modal/Modal'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './Styles'

export const CardApp = ({state}: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {state.language}
        </Typography>
        <Typography variant="h5" component="h2">
          {state.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Modal state={state} />
      </CardActions>
    </Card>
  );
}
