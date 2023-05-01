import styles from './page.module.css';

import { ReactElement } from 'react';

import { CommonContext } from 'app-layers/common-context/types';

import { Header } from 'widgets/page/header';

interface PageProps {
  context: CommonContext;
  children: ReactElement;
}

export const Page = (props: PageProps) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};
