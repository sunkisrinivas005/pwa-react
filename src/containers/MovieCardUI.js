import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MovieCardUI({ data, handleDelete, handleUpdate }) {
  const classes = useStyles();

  return (
    <div className = "col-lg-6" key={data.Title} style = {{padding:"20px"}}>
      <Card key={data.Title}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
           Name :  {data.name}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Email : {data.email}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Phone Number : {data.phonenumber}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Rating : {data.rating ? data.rating : "NA"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant ="contained" color = "primary" onClick ={() => handleDelete({phoneNumber :data.phonenumber})}>Delete</Button>
          <Button size="small" variant ="contained" color = "primary" onClick ={() => handleUpdate(data)}>Update</Button>
        </CardActions>
      </Card>
    </div>
  );
}
