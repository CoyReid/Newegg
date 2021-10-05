import MenuItem from "@material-ui/core/MenuItem";
import { TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#826848",
    marginLeft: "20px",
    borderRadius: "3px",
    color: "white"

  },
  dropDown:{
    padding: "0px 5px 0px 5px"
  }
}));

const SearchBar = ({search, onSearchChange, filter, onFilterChange, sort, onSortChange}) => {
  const classes = useStyles();

  function handleSearchChange(e) {
    onSearchChange(e.target.value);
  }

  function handleFilterChange(e) {
    onFilterChange(e.target.value);
  }

  function handleSortChange(e) {
    onSortChange(e.target.value);
  }

  const categories = ["All", "Case", "Motherboard", "CPU", "GPU", "Power Supply", "RAM"];
  const sortings = ["All", "Price", "Rating"];

  return (
    <div className="search">
      <TextField
        className={classes.root}
        id="outlined-secondary"
        label="Search..."
        variant="filled"
        color="primary"
        value={search}
        onChange={handleSearchChange}
      />
      <Select
        className={`${classes.root} ${classes.dropDown}`}
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        onChange={handleFilterChange}
        value={filter}
      >
        {categories.map((category) => (
          <MenuItem value={category.toLowerCase()} key={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      <Select
        className={`${classes.root} ${classes.dropDown}`}
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        onChange={handleSortChange}
        value={sort}
      >
        {sortings.map((sorting) => (
          <MenuItem value={sorting.toLowerCase()} key={sorting}>
            {sorting}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SearchBar;