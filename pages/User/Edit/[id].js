import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleUser } from '../../../api/users';
import UpdateUser from '../../../components/UpdateUser';

export default function EditUser() {
  const [user, setUser] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleUser(id).then(setUser);
  }, []);

  return (
    <UpdateUser user={user} />
  );
}
