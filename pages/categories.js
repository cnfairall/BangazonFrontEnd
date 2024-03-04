import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { getCategories } from '../api/categories';
import CategoryCard from '../components/cards/CategoryCard';

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <>
      <Typography variant="h2">
        Product Categories
      </Typography>
      {categories.map((c) => (
        <CategoryCard category={c} key={c.id} />
      ))}
    </>
  );
}
