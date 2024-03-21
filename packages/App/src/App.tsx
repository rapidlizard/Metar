import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.scss';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>METAR</h1>
      </header>
    </div>
  );
};

export default App;
