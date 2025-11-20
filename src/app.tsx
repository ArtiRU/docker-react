import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './components/about/about.module.scss';
import image from '@/assets/images/img1.png';
import Temperature from '@/assets/images/temperature.svg';

const App: FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Button</button>
      <Link to="/about" className={styles.red}>
        About
      </Link>
      <Link to="/contact" className={styles.red}>
        Contact
      </Link>
      <div>
        <img src={image} alt="123" width={100} height={100} />
        <Temperature width={200} height={200} style={{ color: 'yellow' }} />
      </div>
    </div>
  );
};

export default App;
