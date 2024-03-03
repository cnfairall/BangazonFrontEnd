/* eslint-disable import/no-extraneous-dependencies */
import {
  Card, CardContent, Typography, CardMedia, Button,
} from '@mui/material';
import Link from 'next/link';
import { Storefront, Edit } from '@mui/icons-material';
import PropTypes from 'prop-types';

export default function UserCard({ user }) {
  return (
    <Card sx={{ maxWidth: 300 }} component="div">
      <CardMedia sx={{ height: 200 }} image={user.imageUrl} title="user image" />
      <CardContent>
        <Typography variant="h5" component="div">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          @{user.username}
        </Typography>
        <Typography variant="subtitle1">{user.email}</Typography>
        <Typography variant="body2">{user.address}</Typography>
        <Link href={`/user/edit/${user.id}`} passHref>
          <Button>
            <Edit />
          </Button>
        </Link>
        {user.isSeller ? (
          <Link href={`/user/${user.id}/store`} passHref>
            <Button>
              <Storefront />
            </Button>
          </Link>
        ) : (
          ''
        )}
      </CardContent>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    isSeller: PropTypes.bool,
    username: PropTypes.string,
    firstName: PropTypes.string,
    imageUrl: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
};
