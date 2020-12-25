import { WordsMenu, DraggableWord } from "./components";
import { useWords, usePlayer } from "./hooks";
import { capitalize } from "./utils";
import logo from "./pf-logo.png";
import styles from "./App.module.css";

const VIDEO_URL =
  "https://frontend-coding-challenge.s3.amazonaws.com/moonwalker.mp4";

function App() {
  const words = useWords();
  const player = usePlayer(null);

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
          <video className={styles.player} controls muted ref={player.ref}>
            <source src={VIDEO_URL} type='video/mp4' />
          </video>
          {words.words.map((word, index) => (
            <DraggableWord
              active={word.value === words.activeWord}
              className={styles.word}
              key={word.value}
              word={capitalize(word.value)}
              visible={word.visible}
              defaultPosition={{ y: (index + 1) * 65, x: 50 }}
              onActive={() => words.setActiveWord(word.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
