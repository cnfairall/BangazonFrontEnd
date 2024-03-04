import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import Link from 'next/link';
import UserCard from '../../components/cards/UserCard';
import { getSingleUser } from '../../api/users';

function UserProfile() {
  const [userObj, setUserObj] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleUser(id).then(setUserObj);
  }, []);

  return (
    <>
      <Typography variant="h2">Profile</Typography>
      <UserCard user={userObj} />
      <Link href={`/orderhistory/${userObj.id}`} passHref>
        <Typography variant="h4">
          See Order History
        </Typography>
      </Link>
      {userObj.isSeller ? (
        <Link href={`/dashboard/${userObj.id}`} passHref>
          <Typography variant="h4">
            See Seller Dashboard
          </Typography>
        </Link>
      ) : ''}
    </>
  );
}

export default UserProfile;
