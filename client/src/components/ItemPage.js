import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    marginTop: "100px",
    marginLeft: "30px",
    maxHeight: 470,
  },
  media: {
    height: 470,
    maxWidth: 500,
    minWidth: 350,
  },
  text: {
    color: "white",
  },
  loader: {
    margin: "200px auto 0 auto",
    display: "flex",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  itemText: {
    margin: "auto",
    color: "white",
    marginTop: "60px",
  },
}));

const ItemPage = () => {
  const classes = useStyles();

  let { id } = useParams();
  let idNumber = { id }.id;

  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`/items/${idNumber}`)
      .then((r) => r.json())
      .then(setItem);
  }, [idNumber]);

  if (Object.keys(item).length !== 0) {
    return (
      <div className="item-page">
        <div className="item-details">
          <Card className={classes.root}>
            <CardMedia
              component="img"
              className={classes.media}
              image={item.image}
              title={item.image}
              alt="a computer part"
            ></CardMedia>
          </Card>
          <div className="item-title">
            <Typography variant="h4" className={classes.itemText}>
              {item.name}
              <Typography>
                Price: {item.price}
                <br></br>
                Rating: {item.rating}/5
                <br></br>
                In Stock: {item.stock ? "Yes" : "No"}
                <br></br>
                Brand: {item.brand}
                <br></br>
                Specs: {item.specs}
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    );
  }
};

export default ItemPage;
