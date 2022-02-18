import { useState } from 'react';

import Button from '../UI/Button';
import styles from './AddUserForm.module.css';

const AddUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      props.onError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age (non-empty-values).',
      });
      return;
    }

    if (enteredUsername.trim().length > 10) {
      props.onError({
        title: 'Invalid username',
        message: 'Please enter a valid username (between 1 and 10 character).',
      });
      return;
    }

    if (+enteredAge < 1) {
      props.onError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    const user = {
      username: enteredUsername,
      age: +enteredAge,
    };

    props.onSaveUserData(user);

    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['form-control']}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <p>The maximum length of username is 10 characters.</p>
      </div>
      <div className={styles['form-control']}>
        <label htmlFor='age'>Age (Years)</label>
        <input
          type='number'
          id='age'
          value={enteredAge}
          onChange={ageChangeHandler}
          step='1'
        />
      </div>
      <div className={styles['form__actions']}>
        <Button type='button' onClick={props.onCancel}>
          Cancel
        </Button>
        <Button type='submit'>Add User</Button>
      </div>
    </form>
  );
};

export default AddUserForm;
