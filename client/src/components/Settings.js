import TextField from "@mui/material/TextField";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "400px",
    },
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    background: "#D2B599",
    marginLeft: "170px",
  },
  textfield: {
    background: "white",
  },
  main: {
    marginLeft: "575px",
  },
}));

export default function Settings({ user, setCurrentUser }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    address: user.address,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUserObj = {
      ...user,
      username: formData.username,
      email: formData.email,
      address: formData.address,
    };
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserObj),
    })
      .then((r) => r.json())
      .then(setCurrentUser);
    setFormData({
      ...formData,
    });
    alert("Information was saved!");
  }

  return (
    <Grid container className={classes.main}>
      <Grid item xs={12}>
        <form className={classes.root}>
          <TextField
            className={classes.textfield}
            variant="filled"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            className={classes.textfield}
            variant="filled"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            className={classes.textfield}
            variant="filled"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </form>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleSubmit} className={classes.btn} id="save">
          Save
        </Button>
      </Grid>
    </Grid>
  );
}
