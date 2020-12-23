import classNames from 'classnames';
import styles from './ListItem.module.css';

function ListItem(props) {
  const { title, description, actionButtonText, onActionButtonClick } = props;

  return <div className={classNames(styles.listItem, props.className)}>
    <div className={styles.content}>
      <span className={classNames(styles.title, props.titleClassName)}>
        {title}
      </span>
      <span className={classNames(styles.description, props.descriptionClassName)}>
        {description}
      </span>
    </div>
    <button className={styles.button} onClick={onActionButtonClick}>
      {actionButtonText}
    </button>
  </div>
}

export default ListItem;