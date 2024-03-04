import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import Link from 'next/link';
import { getOrderDetails } from '../../api/orders';

export default function OrderDetails() {
  const [order, setOrder] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getOrderDetails(id).then(setOrder);
  }, [id]);

  return (
    <>
      <Card sx={{ maxWidth: 300 }} component="div">
        <CardContent>
          <Typography>Order Total ${order.totalCost}</Typography>
          <Typography variant="caption" component="div">
            {order.datePlaced}
          </Typography>
        </CardContent>
      </Card>
      {order.products?.map((product) => (
        <>
          <Card key={product.id} sx={{ maxWidth: 300 }} component="div">
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
              <Typography variant="body2">
                Sold by <span><Link href={`/store/${product?.seller?.id}`}>{product?.seller?.username}</Link></span>
              </Typography>
            </CardContent>
          </Card>
        </>
      ))}
    </>
  );
}
