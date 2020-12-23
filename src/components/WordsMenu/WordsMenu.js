import classNames from 'classnames';
import { capitalize } from '../../utils';
import { fetcinghStatuses } from '../../constants';
import { ListItem } from '../';
import styles from './WordsMenu.module.css';

function WordsMenu(props) {
  const { words, status, onToggleVisibility } = props;
  const getWordDescription = (amount) => `${amount} appearance${amount > 0 ? 's' : ''}`;

  return <div className={classNames(props.className, styles.wordsMenu)}>
    <div className={styles.header}>
      Most Common Words
    </div>
    {status === fetcinghStatuses.FETCHING
      ? <div className={styles.loader}>Loading...</div>
      : (<ul className={styles.wordsList}>
        {words.map((word) => <li className={styles.word} key={word.value}>
          <ListItem
            title={capitalize(word.value)}
            description={getWordDescription(word.amount)}
            descriptionClassName={styles.wordDescription}
            actionButtonText={word.visible ? 'Hide' : 'Show'}
            onActionButtonClick={() => onToggleVisibility(word.value)}
          />
        </li>)}
      </ul>)}
  </div>
}

export default WordsMenu;