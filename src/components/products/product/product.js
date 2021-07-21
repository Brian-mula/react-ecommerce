import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={Product.name}
      />
      <CardContent>
        <div className={classes.cardcontent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formated_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardaction}>
        <IconButton
          aria-label="add to cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCartOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
