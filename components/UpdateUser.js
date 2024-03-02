import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { editUser } from '../api/users';

const initialState = {
  id: 0,
  username: '',
};

function UpdateUser({ user }) {
  const [formData, setFormData] = useState({ initialState });
  const router = useRouter();

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(formData).then(router.push('/'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="url"
          placeholder="Enter image URL"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="isSeller"
        name="isSeller"
        label="Check if selling products"
        checked={formData.isSeller}
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            isSeller: e.target.checked,
          }));
        }}
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

UpdateUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    uid: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    isSeller: PropTypes.bool,
  }).isRequired,
};

export default UpdateUser;
