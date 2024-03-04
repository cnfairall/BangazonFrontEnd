import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { getOrderHistoryDetails } from '../../api/orders';
import OrderCard from '../../components/cards/OrderCard';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [noOrders, setNoOrders] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getOrderHistoryDetails(id).then((array) => {
      if (array.length === 0) {
        setNoOrders(true);
      } else {
        setOrders(array);
      }
    });
  }, [id]);

  return (
    <>
      <Typography variant="h2">Order History</Typography>
      {noOrders ? (
        <div>
          You have no completed orders!
        </div>
      ) : (
        <div>
          {orders.map((order) => (
            <OrderCard order={order} key={order.id} />
          ))}
        </div>
      )}
    </>
  );
}
