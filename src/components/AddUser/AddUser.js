import { useState } from 'react';

import styles from './AddUser.module.css';
import AddUserForm from './AddUserForm';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [formIsShow, setFormIsShow] = useState(false);
  const [error, setError] = useState();

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
    setFormIsShow(false);
  };

  const showFormHandler = () => {
    setFormIsShow(true);
  };

  const hideFormHandler = () => {
    setFormIsShow(false);
  };

  const errorHandler = ({ title, message }) => {
    setError({
      title,
      message,
    });
  };

  const closeModalHandler = () => {
    setError(null);
  };

  let addUserContent = <Button onClick={showFormHandler}>Add New User</Button>;
  if (formIsShow) {
    addUserContent = (
      <AddUserForm
        onSaveUserData={saveUserDataHandler}
        onError={errorHandler}
        onCancel={hideFormHandler}
      />
    );
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeModalHandler}
        />
      )}
      <Card className={styles['add-user']}>{addUserContent}</Card>
    </div>
  );
};

export default AddUser;
