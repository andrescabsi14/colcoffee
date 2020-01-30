import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const CardOption = ({ selectOption, role }) => {
  const classes = useStyles();

  return (
    <Card
      className={`${classes.card} CardOption-wrapper`}
      onClick={() => selectOption(role.id)}
    >
      <CardActionArea>
        {/* {role.image && (
          <CardMedia
            className={classes.media}
            image={require(role.image)}
            title={role.title}
          />
        )} */}
        <div className="Card-image">
          <img src={role.image} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {role.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardOption;
