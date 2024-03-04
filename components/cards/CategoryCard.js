/* eslint-disable import/no-extraneous-dependencies */
import {
  Card, CardContent, Typography,
} from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getThreeProducts } from '../../api/categories';

export default function CategoryCard({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getThreeProducts(category.id).then(setProducts);
  }, [category]);

  return (
    <Card sx={{ maxWidth: 300 }} component="div">
      <CardContent>
        <Typography variant="h4" component="div">
          {category.name}
        </Typography>

        <Typography variant="subtitle2">Top Products</Typography>
        {products.map((product) => (
          <Card key={product?.id}>
            <Link href={`/product/${product?.id}`} passHref>
              <Typography>{product.title}</Typography>
            </Link>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
