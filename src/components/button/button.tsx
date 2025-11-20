import React, { FC, PropsWithChildren } from 'react';

import styles from './button.module.scss';

const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className={styles.button} data-testid="button">
      {children}
    </button>
  );
};

export default Button;
