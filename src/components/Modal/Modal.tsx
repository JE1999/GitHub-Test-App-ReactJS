import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const Modal = ({state}: any) => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen(!open)

  const handleClickRepo = () => window.open(state.html_url)

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        Más
      </Button>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <DialogContentText id="alert-dialog-description">
            {state.language}
          </DialogContentText>
            {state.name}    
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {state.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Cerrar
          </Button>
          <Button onClick={handleClickRepo} color="primary" autoFocus>
            Ir al repositorio
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
