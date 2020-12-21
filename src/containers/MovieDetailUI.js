import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({open, handleClose, data}) {
  return (
    <div>
      <Dialog onClose={handleClose} 
      aria-labelledby="customized-dialog-title" 
      open={open}
      maxWidth = {"md"}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {data.Title}
        </DialogTitle>
        <div className = "col-lg-12" style = {{width:"700px"}}>
        <DialogContent dividers>
          <Typography gutterBottom>
          Distributor : {data.Distributor ? data.Distributor : "Paramount Pictures"}
          </Typography>
          <Typography gutterBottom>
          Source : {data.Source ? data.Source : "Movie Forsenics" }
          </Typography>
          <Typography gutterBottom>
          MPAA Rating : {data['MPAA Rating'] ? data['MPAA Rating'] : "Not Disclosed" }
          </Typography>
          <Typography gutterBottom>
          Production Budget : {data['Production Budget'] ? data['Production Budget'] : "Not Disclosed" }
          </Typography>
          <Typography gutterBottom>
          Genre:  {data["Major Genre"] ? data["Major Genre"] : "Need to Watch" }
          </Typography>
          <div className = "row">
          <h4>IMBD rating :</h4>
          <Rating
          name="simple-controlled"
          size="large" 
          max={10} 
          value={data["IMDB Rating"] ? data["IMDB Rating"] : 4.2 }
        />
          </div>
        </DialogContent>
        </div>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
