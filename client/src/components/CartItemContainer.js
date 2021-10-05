import CartItemCard from "./CartItemCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
  },
  paper: {
    height: 250,
    width: 250,
    padding: theme.spacing(1),
  },
  control: {
    padding: theme.spacing(1),
  },
}));

const CartItemContainter = ({ items, handleDelete }) => {
  const classes = useStyles();

  const itemsToShow = items.map((item) => <CartItemCard item={item.item} key={item.id} handleDelete={handleDelete}/>);

  return (
    <Grid
      container
      className={classes.root}
      spacing={3}
      justifyContent="space-between"
    >
      {itemsToShow}
    </Grid>
  );
};

export default CartItemContainter;