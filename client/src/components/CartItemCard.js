import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function CartItemCard({ item, handleDelete }) {
  function handleClick() {
    handleDelete(item.id);
  }

  return (
    <Grid item xs={4}>
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Link to={`/item/${item.id}`}>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={item.image} />
              </ButtonBase>
            </Link>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.brand}
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  {item.specs}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                ${item.price}
              </Typography>
              <Typography variant="subtitle2" component="div">
                {item.rating}/5
              </Typography>
              <Button variant="outlined" onClick={handleClick}>
              Remove
            </Button>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
