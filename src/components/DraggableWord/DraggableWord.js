import classNames from "classnames";
import Draggable from "react-draggable";
import Confetti from "react-dom-confetti";
import { Tooltip } from "../";
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
    positionVisible,
    ref,
  } = useWord({ onActive });

  const wordClassName = classNames(
    { [styles.visible]: visible },
    styles.draggableWord
  );
  const wrapperClassName = classNames(
    { [styles.active]: active },
    props.className
  );

  return (
    <Draggable
      ref={ref}
      bounds='parent'
      defaultPosition={defaultPosition}
      {...draggableHanlders}
    >
      <div className={wrapperClassName}>
        <div className={wordClassName} {...wordHandlers}>
          <Confetti active={clicked} config={confettiConfig} />
          <span className={styles.text} style={{ color }}>
            {word}
          </span>
        </div>
        <Tooltip visible={positionVisible} className={styles.positionTooltip}>
          <div className={styles.position}>
            <span>{`x: ${ref?.current?.state?.x}px`}</span>
            <span>{`y: ${ref?.current?.state?.y}px`}</span>
          </div>
        </Tooltip>
      </div>
    </Draggable>
  );
}

export default DraggableWord;
