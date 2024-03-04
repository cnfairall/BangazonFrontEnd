/* eslint-disable import/no-extraneous-dependencies */
import {
  Card, CardContent, Typography, CardActions, Button, CardMedia,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { deleteProductFromCart } from '../../api/products';
import { getCart } from '../../api/orders';
import { useAuth } from '../../utils/context/authContext';

export default function CartProductCard({ product, onUpdate }) {
  const { user } = useAuth();
  const [cart, setCart] = useState({});

  useEffect(() => {
    getCart(user[0].id).then(setCart);
  }, []);

  const removeFromCart = () => {
    const payload = {
      orderId: cart.id,
      productId: product.id,
    };
    deleteProductFromCart(payload).then(() => onUpdate());
  };

  return (
    <>
      <Card sx={{ maxWidth: 300 }} component="div">
        <CardMedia
          sx={{ height: 200 }}
          image={product.imageUrl}
          title="product image"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="subtitle1">
            ${product.pricePer}
          </Typography>
          <Typography variant="body2">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={removeFromCart}>Remove from cart</Button>
        </CardActions>
      </Card>
    </>
  );
}

CartProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    pricePer: PropTypes.number,
    seller: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
