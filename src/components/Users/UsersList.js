import '../../index.css';
import styles from './UsersList.module.css';
import User from './User';

const UsersList = (props) => {
  let users = (
    <p className='centered'>
      <strong>Found no users!</strong>
    </p>
  );

  if (props.users.length > 0) {
    users = props.users.map((user) => <User key={user.id} user={user} />);
  }
  return <ul className={styles['users-list']}>{users}</ul>;
};

export default UsersList;
