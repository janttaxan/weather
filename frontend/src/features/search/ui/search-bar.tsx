import styles from './search-bar.module.css';

import classNames from 'classnames';

interface SearchBarProps {
  className?: string;
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <div className={classNames(styles.root, props.className)}>
      <input className={styles.input} type='text' placeholder='Поиск' />
    </div>
  );
};
