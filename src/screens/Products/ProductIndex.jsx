import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import  CardMedia  from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Reviews from "../../components/review";
import { cartContext } from "../../Context/CartContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  card: {
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  },
  button: {
    marginRight: "10px",
  },
  container: {
    marginRight: "10px",
  },
  media: {
    height: 200,
    width:300
  },
  
});

export default function Products({productObj}) {
  const classes = useStyles();

  const { dispatch } = useContext(cartContext);

  const navigate = useHistory();

  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      id: productObj.id,
      product: productObj,
    });
  };

  const ShopNowHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      id: productObj.id,
      product: productObj,
    });
    navigate.push("/cart");
  };

  return (
    <Card key={productObj.id} className={classes.card}>
      <Link
        key={productObj.id}
        className={classes.link}
        to={`/products/${productObj.id}`}
      >
        <CardMedia
          className={classes.media}
          image={productObj.img}
          title={productObj.name}
        /> 
        <h3 className="title">{productObj.name}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 style={{ fontSize: "24px", color: "#800000" }}>
            {productObj.price}
            <span>
              <AttachMoneyIcon />{" "}
            </span>
          </h4>
          <div style={{ marginTop: "20px" }}>
            <Reviews value={productObj.reviews} />
          </div>
        </div>
      </Link>

      <ButtonGroup variant="text" style={{ padding: "10px" }}>
        <Button
          color="primary"
          className={classes.button}
          onClick={addToCartHandler}
        >
          Add to Cart <AddShoppingCartIcon />
        </Button>
        <Button
          color="secondary"
          className={classes.button}
          onClick={ShopNowHandler}
        >
          Shop now <ShoppingBasketIcon />
        </Button>
      </ButtonGroup>
    </Card>
  );

}
