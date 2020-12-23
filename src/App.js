import { WordsMenu } from './components';
import { useWords } from './hooks';
import logo from './pf-logo.png';
import styles from './App.module.css';

function App() {
  const words = useWords();

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} alt='Pinata Farms logo' width={42} height={42} />
        <h1>Piñata Farms Frontend Coding Challenge</h1>
      </header>
      <div className={styles.content}>
        <WordsMenu
          className={styles.wordsMenu}
          words={words.words}
          onToggleVisibility={words.toggleWordVisibility}
          status={words.status}
        />
        <div className={styles.playerContainer}>
          <div className={styles.player} />
        </div>
      </div>
    </div>
  );
}

export default App;
