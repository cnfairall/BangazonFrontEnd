/* eslint-disable import/no-extraneous-dependencies */
import {
  Card, CardContent, Typography, CardActions, Button, CardMedia,
} from '@mui/material';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { addProductToCart } from '../../api/products';
import { getCart } from '../../api/orders';
import { useAuth } from '../../utils/context/authContext';

export default function ProductCard({ product }) {
  const { user } = useAuth();
  const [cart, setCart] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    getCart(user[0].id).then(setCart);
  }, []);

  const addToCart = () => {
    const payload = {
      orderId: cart.id,
      productId: product.id,
    };
    addProductToCart(payload).then(handleShow());
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
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            @{product.pricePer}
          </Typography>
          <Typography variant="body2">
            {product.description}
          </Typography>
          <Typography variant="body2">
            Sold by {product?.seller?.username}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={addToCart}>Add to cart</Button>
        </CardActions>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>{product.title} added to your cart!</div>

        </Modal.Body>
      </Modal>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    pricePer: PropTypes.number,
    seller: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
};
