import { useEffect, useState } from 'react';
import UserCard from '../components/cards/UserCard';
import { getSingleUser } from '../api/users';

function Home() {
  const userId = 1;
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    getSingleUser(userId).then(setUserObj);
  }, []);

  return (
    <UserCard user={userObj} />
  );
}

export default Home;
