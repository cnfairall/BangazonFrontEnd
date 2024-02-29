import { useEffect, useState } from 'react';
import UserCard from '../components/cards/UserCard';
import { getSingleUser } from '../api/users';
import { getSingleProduct } from '../api/products';
import ProductCard from '../components/cards/ProductCard';

function Home() {
  const userId = 1;
  const productId = 1;
  const [userObj, setUserObj] = useState({});
  const [productObj, setProductObj] = useState({});

  useEffect(() => {
    getSingleUser(userId).then(setUserObj);
    getSingleProduct(productId).then(setProductObj);
  }, []);

  return (
    <>
      <UserCard user={userObj} />
      <ProductCard product={productObj} />
    </>
  );
}

export default Home;
