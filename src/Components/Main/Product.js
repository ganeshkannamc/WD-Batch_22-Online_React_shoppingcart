import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import { useEffect } from "react";

const Product = ({
  id,
  name,
  price,
  image,
  description,
  cartCount,
  setFeed,
  feed,
}) => {
  

  function handleAddToCart(eve) {
    let productId = eve.target.id;
    let updatedFeed = feed.map((itm) => {
      if (itm.id == productId) {
        itm.cartCount += 1;
        return itm;
      }
      return itm;
    });
    setFeed(updatedFeed);
  }

  function handleCartCount(eve) {
    let type = eve.target.name;
    let productId = eve.target.id;
    if (type == "decre") {
      let updatedFeed = feed.map((itm) => {
        if (itm.id == productId) {
          itm.cartCount -= 1;
          return itm;
        }
        return itm;
      });
      setFeed(updatedFeed);
    }

    if (type == "incre") {
      let updatedFeed = feed.map((itm) => {
        if (itm.id == productId) {
          itm.cartCount += 1;
          return itm;
        }
        return itm;
      });
      setFeed(updatedFeed);
    }
  }

  return (
    <Card sx={{ minWidth: 200, maxWidth: 300, margin: 2 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="Product Image" />
      <CardContent>
        <CardHeader title={name} />
        <Typography gutterBottom variant="h5" component="div">
          Rs. {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="d-flex flex-column justify-content-center">
          {cartCount > 0 && (
            <div>
              <button
                className="btn btn-primary m-0"
                id={id}
                name="decre"
                onClick={handleCartCount}
              >
                -
              </button>
              <input
                type="number"
                disabled
                style={{ width: "50px" }}
                value={cartCount}
              />
              <button
                className="btn btn-primary m-0"
                id={id}
                name="incre"
                onClick={handleCartCount}
              >
                +
              </button>
            </div>
          )}

          {cartCount <= 0 && (
            <div>
              <Button
                color="primary"
                variant="outlined"
                size="small"
                id={id}
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            </div>
          )}
        </div>
      </CardActions>
    </Card>
  );
};

export default Product;
