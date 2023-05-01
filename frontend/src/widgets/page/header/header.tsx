import styles from 'widgets/page/header/header.module.css';

import classNames from 'classnames';

import { SearchBar } from 'features/search';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <header className={classNames(styles.root, props.className)}>
      <SearchBar />
      <div>navigation</div>
    </header>
  );
};
