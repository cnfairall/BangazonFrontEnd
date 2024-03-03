import { useEffect, useState } from 'react';
import {
  Container, Typography, Card, CardContent,
} from '@mui/material';
import { getCart } from '../../../api/orders';
import { useAuth } from '../../../utils/context/authContext';

export default function Cart() {
  const [cart, setCart] = useState({});
  const [empty, setEmpty] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    getCart(user[0].id).then(setCart);
    if (cart.products == null) {
      setEmpty(true);
    }
  });

  return (
    <Container>
      <Typography variant="h2">Shopping Cart</Typography>
      {empty ? (
        <Typography variant="body1">Your cart is empty!</Typography>
      )
        : (cart.products?.map((p) => (
          <Card>
            <Typography variant="subtitle1">
              {p.title}
            </Typography>
            <CardContent>
              <Typography>
                {p.pricePer}
              </Typography>
              <Typography>
                {p.description}
              </Typography>
            </CardContent>
          </Card>
        )))}
    </Container>
  );
}