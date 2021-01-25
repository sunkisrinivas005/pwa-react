import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { DialogActions } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{props.props.title}</Typography>
      {props.props.isDialog ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={props.handleModalClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const ManageDialog = (props) => {
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleModalClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth={props.maxWidth ? props.maxWidth : "md"}
    >
      <DialogTitle
        id="customized-dialog-title"
        props={props}
        handleModalClose={props.handleModalClose}
      />
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.children}
        </DialogContentText>
      </DialogContent>
      {props.buttons ? (
        <DialogActions>
          <Button
            onClick={props.handleSubmit}
            style={{ marginRight: "20px" }}
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      ) : null}
    </Dialog>
  );
};

export default ManageDialog;
