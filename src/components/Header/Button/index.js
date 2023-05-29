import styles from './Button.module.css';

function Button(props) {
  const handleBtnDisplay = () => {
    props.onDisplay(true);
  };

  return (
    <button className={styles.btn} onClick={handleBtnDisplay}>
      ADD NEW EXPENSE
    </button>
  );
}

export default Button;
