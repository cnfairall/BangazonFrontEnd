/* eslint-disable import/no-extraneous-dependencies */
import {
  Card, CardContent, Typography, CardActions, Button, CardMedia,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 300 }} component="div">
      <CardMedia
        sx={{ height: 200 }}
        image={product.imageUrl}
        title="product image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          @{product.pricePer}
        </Typography>
        <Typography variant="body2">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    pricePer: PropTypes.number,
  }).isRequired,
};
