import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    marginTop: "100px",
    marginLeft: "30px",
    maxHeight: 470,
  },
  media: {
    margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  },
  text: {
    color: "white",
  },
  loader: {
    margin: "200px auto 0 auto",
    display: "flex",
    justifyContent: "center",
  },
  itemText: {
    margin: "auto",
    color: "white",
    marginTop: "60px",
  },
  woot: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
  },
  info: {
    marginTop: "50px",
  },
  btn: {
    marginTop: "20px",
    backgroundColor: "#D2B599",
  }
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

  function handleClick() {
    fetch("/user_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        item_id: item.id,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((errors) => Promise.reject(errors));
      }
    });
    alert("Item Added to Cart!");
  }

  if (Object.keys(item).length !== 0) {
    return (
      <>
        <Grid container className={classes.woot}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                className={classes.media}
                image={item.image}
                title={item.image}
                alt="a computer part"
              ></CardMedia>
            </Card>
          </Grid>
          <Grid item xs={6} className={classes.info}>
            <Typography variant="h4" className={classes.itemText}>
              {item.name}
              <Typography>
                <em>Price:</em> ${item.price}
                <br></br>
                <em>Rating:</em> {item.rating}/5
                <br></br>
                <em>Brand:</em> {item.brand}
                <br></br>
                <em>Specs:</em> {item.specs}
              </Typography>
            </Typography>
            <Button variant="outlined" onClick={handleClick} className={classes.btn} id="add-btn">
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </>
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
