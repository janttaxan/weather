import styles from './button.module.css';

import classNames from 'classnames';

import { ButtonProps } from 'shared/ui/button/types';

export const Button = (props: ButtonProps) => {
  return (
    <button className={classNames(styles.root, props.className)} onClick={props.onClick} data-testid='button'>
      {props.text}
    </button>
  );
};
