import { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import ErrorModal from './components/UI/ErrorModal';
import Users from './components/Users/Users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorText, setErrorText] = useState('');

  const addUserHandler = (user) => {
    setUsers((prevState) => {
      return [user, ...prevState];
    });
  };

  const showErrorModalHandler = (errorText) => {
    setErrorText(errorText);
    setShowErrorModal(true);
  };

  const hideErrorModalHandler = () => {
    setShowErrorModal(false);
  };
  return (
    <div>
      <AddUser
        onAddUser={addUserHandler}
        onShowErrorModal={showErrorModalHandler}
      />
      <Users users={users} />
      <ErrorModal
        show={showErrorModal}
        text={errorText}
        onHideErrorModal={hideErrorModalHandler}
      />
    </div>
  );
};

export default App;
