import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ItemCardProto from "./ItemCardProto";

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

const ItemContainter = ({ items }) => {
  const classes = useStyles();

  const itemsToShow = items.map((item) => <ItemCardProto item={item} key={item.id} />);

  return (
    <Grid
      container
      className={classes.root}
      spacing={5}
      justifyContent="space-between"
    >
      {itemsToShow}
    </Grid>
  );
};

export default ItemContainter;