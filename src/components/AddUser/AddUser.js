import { useState } from 'react';

import styles from './AddUser.module.css';
import AddUserForm from './AddUserForm';
import Button from '../UI/Button';
import Card from '../UI/Card';

const AddUser = (props) => {
  const [formIsShow, setFormIsShow] = useState(false);

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

  const invalidValueHandler = (errorText) => {
    props.onShowErrorModal(errorText);
  };

  let addUserContent = <Button onClick={showFormHandler}>Add New User</Button>;
  if (formIsShow) {
    addUserContent = (
      <AddUserForm
        onSaveUserData={saveUserDataHandler}
        onInvalidValue={invalidValueHandler}
        onCancel={hideFormHandler}
      />
    );
  }

  return <Card className={styles['add-user']}>{addUserContent}</Card>;
};

export default AddUser;
