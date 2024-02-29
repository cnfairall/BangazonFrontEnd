import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleProduct } from '../../api/products';
import ProductCard from '../../components/cards/ProductCard';

export default function ProductPage() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setProduct);
  }, []);

  return (
    <ProductCard product={product} />
  );
}
