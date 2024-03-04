/* eslint-disable import/no-extraneous-dependencies */
import {
  Button,
  Card, CardContent, Typography,
} from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function OrderCard({ order }) {
  return (
    <Card sx={{ maxWidth: 300 }} component="div">
      <CardContent>
        <Typography>Order Total ${order.totalCost}</Typography>
        <Typography variant="caption" component="div">
          {order.datePlaced}
        </Typography>
        {order.products?.map((p) => (
          <Link href={`/product/${p.id}`} passHref key={p.id}>
            <Typography variant="body1">{p.title}</Typography>
          </Link>
        ))}
        <Link href={`/order/${order.id}`} passHref key={order.id}>
          <Button>Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    customerId: PropTypes.number,
    totalCost: PropTypes.number,
    datePlaced: PropTypes.instanceOf(Date),
    products: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    })),
  }).isRequired,
};
