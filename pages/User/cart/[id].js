import { useEffect, useState } from 'react';
import {
  Container, Typography,
} from '@mui/material';
import { Modal, Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getCart, placeOrder } from '../../../api/orders';
import { useAuth } from '../../../utils/context/authContext';
import CartProductCard from '../../../components/cards/CartProductCard';
import { getPaymentTypes } from '../../../api/paymentTypes';

export default function Cart() {
  const [cart, setCart] = useState({});
  const [noProducts, setNoProducts] = useState(false);
  const [formInput, setFormInput] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { user } = useAuth();
  const router = useRouter();
  const [paymentTypes, setPaymentTypes] = useState([]);

  const getMyCart = () => {
    getCart(user[0].id).then(setCart);
    if (cart?.products?.length === 0) setNoProducts(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      orderId: cart.id,
      paymentTypeId: formInput.paymentTypeId,
    };
    placeOrder(payload).then(() => {
      router.push(`/orderhistory/${user[0].id}`);
      handleClose();
    });
  };

  useEffect(() => {
    getMyCart();
    getPaymentTypes().then(setPaymentTypes);
  }, []);

  return (
    <Container>
      <Typography variant="h2">Shopping Cart</Typography>
      {noProducts ? (
        <div>
          Your cart is empty!
        </div>
      ) : (
        <div>
          {cart?.products?.map((product) => (
            <CartProductCard product={product} key={product.id} onUpdate={getMyCart} />
          ))}
          <Button onClick={handleShow}>Go to checkout</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <Form
                id="close-order"
                onSubmit={handleSubmit}
              >
                <Form.Select
                  name="payment"
                  onChange={handleChange}
                  value={formInput.paymentTypeId}
                  required
                >
                  <option value="">Select a Payment Type</option>
                  {
                    paymentTypes.map((p) => (
                      <option
                        key={p.id}
                        value={p.id}
                      >
                        {p.name}
                      </option>
                    ))
                  }
                </Form.Select>
                <Button type="submit">Confirm Order</Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      )}

    </Container>
  );
}
