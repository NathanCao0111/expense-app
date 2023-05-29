import styles from './Header.module.css';
import Button from './Button';
import Form from './Form';
import { useState } from 'react';

function Header() {
  const [headerDisplay, setHeaderDisplay] = useState(false);

  return (
    <div className={styles.header}>
      {!headerDisplay && <Button onDisplay={setHeaderDisplay} />}
      {headerDisplay && <Form onDisplay={setHeaderDisplay} />}
    </div>
  );
}

export default Header;
