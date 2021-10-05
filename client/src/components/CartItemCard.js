import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "auto",
    background: "#1D3545",
  },
  paper: {
    height: 100,
    width: 100,
    padding: theme.spacing(2),
  },
  media: {
    paddingTop: "100%",
    paddingBottom: "2%",
  },
  control: {
    padding: theme.spacing(2),
  },
  text: {
    color: "white",
  },
}));

const CartItemCard = ({ item, handleDelete }) => {
  const classes = useStyles();

  function handleClick() {
    handleDelete(item.id);
  }

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardHeader id="text" title={item.name} subheader={item.category} />
        <Link to={`/item/${item.id}`}>
          <CardMedia
            id="cardpic"
            className={classes.media}
            image={item.image}
          />
        </Link>
        <CardContent>
          <Typography
            className={classes.text}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Price: ${item.price}
            <br></br>
            Rating: {item.rating}/5
            <br></br>
            In Stock: {item.stock ? "Yes" : "No"}
            <br></br>
            Brand: {item.brand}
            <br></br>
            Specs: {item.specs}
          </Typography>
        </CardContent>
        <Button variant="outlined" onClick={handleClick}>
            Remove From Cart
          </Button>
      </Card>
    </Grid>
  );
};

export default CartItemCard;
