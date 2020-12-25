import classNames from "classnames";
import Draggable from "react-draggable";
import Confetti from "react-dom-confetti";
import useWord from "./useWord";
import styles from "./DraggableWord.module.css";

function DraggableWord(props) {
  const { word, visible, defaultPosition, active, onActive } = props;
  const {
    draggableHanlders,
    wordHandlers,
    color,
    clicked,
    confettiConfig,
    ref,
  } = useWord({ onActive });

  return (
    <Draggable
      bounds='parent'
      defaultPosition={defaultPosition}
      {...draggableHanlders}
      ref={ref}
    >
      <div className={classNames({ [styles.active]: active }, props.className)}>
        <div
          className={classNames(
            { [styles.visible]: visible },
            styles.draggableWord
          )}
          {...wordHandlers}
        >
          <Confetti active={clicked} config={confettiConfig} />
          <span className={styles.text} style={{ color }}>
            {word}
          </span>
        </div>
      </div>
    </Draggable>
  );
}

export default DraggableWord;
