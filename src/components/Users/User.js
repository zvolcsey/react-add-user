import styles from './User.module.css';

const User = (props) => {
  const userText = `${props.user.username} (${props.user.age} years old)`;

  return <li className={styles.user}>{userText}</li>;
};

export default User;
