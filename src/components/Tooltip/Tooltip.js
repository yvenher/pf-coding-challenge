import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Tooltip.module.css";

function Tooltip(props) {
  const { visible } = props;
  const [rendered, setRendered] = useState(visible);

  useEffect(() => {
    setTimeout(() => setRendered(visible), 0);
  }, [visible]);

  if (!visible && !rendered) {
    return null;
  }

  const className = classNames(
    { [styles.rendered]: rendered },
    styles.tooltip,
    props.className
  );

  return (
    <div className={className} onTransitionEnd={() => setRendered(visible)}>
      {props.children}
    </div>
  );
}

export default Tooltip;
