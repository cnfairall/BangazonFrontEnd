import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
      <div>hi</div>
      <UserCard user={userObj} />
    </>
  );
}

export default UserProfile;
