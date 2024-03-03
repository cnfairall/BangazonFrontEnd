import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserCard from '../../components/cards/UserCard';
import { getUserStore } from '../../api/users';
import ProductCard from '../../components/cards/ProductCard';

function UserProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [store, setStore] = useState({});

  useEffect(() => {
    getUserStore(id).then(setStore);
  }, []);

  return (
    <>
      <UserCard user={store} />
      {store.products?.map((p) => (
        <ProductCard product={p} />
      ))}
    </>
  );
}

export default UserProfile;
