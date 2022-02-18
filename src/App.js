import { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import Users from './components/Users/Users';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevState) => {
      return [user, ...prevState];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
};

export default App;
