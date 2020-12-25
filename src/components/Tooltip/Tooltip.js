import { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./Tooltip.module.css";

function ListItem(props) {
  const { visible } = props;
  const [render, setRender] = useState(visible);
  const className = classNames(
    { [styles.visible]: visible, [styles.rendered]: render },
    styles.tooltip,
    props.className
  );

  useEffect(() => {
    if (visible) {
      setRender(true);
    }
  }, [visible]);

  return (
    <div className={className} onTransitionEnd={() => setRender(visible)}>
      {props.children}
    </div>
  );
}

export default ListItem;
