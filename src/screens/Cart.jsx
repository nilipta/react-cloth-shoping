import React, { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  cartBody: {
    margin: "10px 20px 10px 20px",
    padding: "10px",
    backgroundColor: "#fdf2f4",
    fontFamily: "Arial, senserif",
    textAlign: "left",
  },
  h1: {
    color: "#283747",
    fontSize: "48px",
  },
});

const Cart = () => {
  const classes = useStyles();

  const cartdata = useContext(cartContext);
  console.log(cartdata.qty);
  //cartdata recieves two parameter State and dispatch

  const data = cartdata.shoppingcart;
  const { dispatch } = useContext(cartContext);
  const id = data.map((shoe) => shoe.id);
  console.log(id);
  const [quantity, setQuantity] = useState(1);
  console.log(data.length);

  const total = data.reduce((toa, obj) => obj.price + toa, 0);

  return (
    <div className={classes.cartBody}>
      <h1 className={classes.h1}>Cart</h1>
      <Grid
        item
        xs={8}
        sm={8}
        md={10}
        lg={10}
        xl={10}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {data.length === 0 ? (
          <h1>You have no items in your cart</h1>
        ) : (
          <div>
            <h1>
              Your Items<span>{data.length}</span>
            </h1>
            <h3>
              Total Price <span>{total * quantity}</span>
            </h3>
          </div>
        )}
      </Grid>
      {data.map((shoe) => {
        const RemoveItem = () => {
          dispatch({
            type: "REMOVE_FROM_CART",
            id: shoe.id,
            product: shoe,
          });
        };

        return (
          <Grid container direction="row" justify="space-around">
            <List>
              
              <ListItem>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <ListItemAvatar>
                  <Avatar alt={shoe.name} src={shoe.img} />
                </ListItemAvatar>
              </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <ListItemText>
                  <h3>{shoe.name}</h3>
                </ListItemText>
              </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <ListItemText>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Qty
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                      label="Age"
                    >
                        
                        <MenuItem value={quantity}>1</MenuItem>
                        
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={4}>5</MenuItem>
                        <MenuItem value={4}>6</MenuItem>
                        <MenuItem value={4}>7</MenuItem>
                        <MenuItem value={4}>8</MenuItem>
                        <MenuItem value={4}>9</MenuItem>
                        <MenuItem value={4}>10</MenuItem>
                        <MenuItem value={100}>More</MenuItem>
                        
                        
                      
                    </Select>
                  </FormControl>
                </ListItemText>
                </Grid>
 <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <ListItemText>
                  <IconButton onClick={RemoveItem}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemText>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <ListItemText>{shoe.price * quantity}</ListItemText>
                </Grid>
              </ListItem>
              
            </List>
          </Grid>
        );
      })}
    </div>
  );
};

export default Cart;
