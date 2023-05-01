import styles from './button.module.css';

import classNames from 'classnames';

interface ButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={classNames(styles.root, props.className)} onClick={props.onClick} data-testid='button'>
      {props.text}
    </button>
  );
};
