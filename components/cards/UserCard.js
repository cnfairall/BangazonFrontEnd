/* eslint-disable import/no-extraneous-dependencies */
import {
  Card, CardContent, Typography, CardActions, Button, CardMedia,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function UserCard({ user }) {
  return (
    <Card sx={{ maxWidth: 300 }} component="div">
      <CardMedia
        sx={{ height: 200 }}
        image={user.imageUrl}
        title="user image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          @{user.username}
        </Typography>
        <Typography variant="subtitle1">
          {user.email}
        </Typography>
        <Typography variant="body2">
          {user.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    firstName: PropTypes.string,
    imageUrl: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
};
