import styles from './User.module.css';

const User = (props) => {
  const userText = `${props.user.username} (${props.user.age} years old)`;

  return <p className={styles.user}>{userText}</p>;
};

export default User;
