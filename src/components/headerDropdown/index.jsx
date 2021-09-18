import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Toolbar, InputLabel, FormControl, Select, Button } from '@material-ui/core';
import { Home, ShoppingBasketOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color={'transparent'}>
        <Toolbar>
          <Link to={`/`}>
            <Button
              variant="contained"
              disabled
              aria-label="delete"
              className={classes.button}
            >
              <Home />
            </Button>
          </ Link>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">All Categories</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              label="All Categories"
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          
          <Link to={`/products`}>
            <Button
              variant="outlined"
              disabled
              aria-label="delete"
              className={classes.button}
              >
                Products
              </Button>
          </Link>
          <Link to={`/cart`}>
            <Button
              variant="outlined"
              disabled
              aria-label="delete"
              className={classes.button}
              >
                <ShoppingBasketOutlined />
                Cart
              </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
