import { useState, useRef, useEffect } from "react";

const COLORS = ["#ff2954", "#3cbd52", "#5c7cff", "#ffff57", "#ffffff"];

const SHOW_POSITION_DELAY = 2000;

function useWord(args) {
  const { onActive } = args;
  const [positionVisible, setPositionVisible] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const showPositionTimer = useRef(null);
  const ref = useRef(null);
  const dragStartTime = useRef(0);

  const confettiConfig = {
    angle: 180,
    spread: 360,
    startVelocity: 20,
    elementCount: 20,
    dragFriction: 0.3,
    duration: 1000,
    stagger: 2,
    width: "5px",
    height: "5px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  const onStart = () => {
    onActive();
    setPositionVisible(false);
    dragStartTime.current = Date.now();
    clearInterval(showPositionTimer.current);
  };

  const onStop = () => {
    const dragDuration = Date.now() - dragStartTime.current;

    if (dragDuration < 200) {
      setClicked(true);
      setTimeout(() => setClicked(false), 0);
      setColorIndex(colorIndex === COLORS.length - 1 ? 0 : colorIndex + 1);
    }
  };

  const onMouseEnter = () => {
    setMouseOver(true);
  };

  const onMouseLeave = () => {
    setMouseOver(false);
  };

  useEffect(() => {
    if (mouseOver) {
      showPositionTimer.current = setTimeout(() => {
        setPositionVisible(true);
      }, SHOW_POSITION_DELAY);
    } else {
      clearTimeout(showPositionTimer.current);
      setPositionVisible(false);
    }
  }, [mouseOver]);

  return {
    wordHandlers: { onMouseEnter, onMouseLeave },
    draggableHanlders: { onStart, onStop },
    color: COLORS[colorIndex],
    clicked,
    confettiConfig,
    positionVisible,
    ref,
  };
}

export default useWord;
