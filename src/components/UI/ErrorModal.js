import styles from './ErrorModal.module.css';
import Backdrop from './Backdrop';
import Button from './Button';
import Card from './Card';

const ErrorModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div>
      <Backdrop onClick={props.onHideErrorModal} />
      <Card className={styles['error-modal']}>
        <h2>Invalid input</h2>
        <p>{props.text}</p>
        <Button onClick={props.onHideErrorModal}>Okay</Button>
      </Card>
    </div>
  );
};

export default ErrorModal;
