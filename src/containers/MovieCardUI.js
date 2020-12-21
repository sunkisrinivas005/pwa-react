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

export default function MovieCardUI({ data, handleDetailClick }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className = "col-lg-6" key={data.Title} style = {{padding:"20px"}}>
      <Card key={data.Title}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {data.Title}
          </Typography>
          <Typography variant="h5" component="h2">
          Movie Title : {data.Title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          Distributor: {data.Distributor ? data.Distributor : "Paramount Pictures" }
          </Typography>
          <Typography variant="body2" component="p">
          Director : {data.Director ? data.Director : "Zack Sydner"}
            <br />
          </Typography>
          <Typography variant="body2" component="p">
          Rating : {data['IMDB Rating'] ? data['IMDB Rating'] : "4.2"}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick ={() => handleDetailClick(data)}>Explore More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
