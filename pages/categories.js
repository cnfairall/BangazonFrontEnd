import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { getCategories } from '../api/categories';

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
        <Container key={c.id} maxWidth="sm">
          <Typography>
            {c.name}
          </Typography>
        </Container>
      ))}
    </>
  );
}
