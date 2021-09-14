import React, { FC } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

export const App: FC = () => {
  const handleClick = () => console.log('Hello World');
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleClick}>Hello World</button>
        <p>
          <a className={styles.AppLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
};
