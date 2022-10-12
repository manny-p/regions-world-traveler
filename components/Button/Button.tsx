import type { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import classnames from 'classnames';

export type ButtonProps = {
  children?: ReactNode;
  className: string;
  color?: 'grey' | 'gold' | 'cyan' | 'kelly';
  href?: string;
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit';
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  color = 'grey',
  href = null,
  onClick = null,
  type = 'button',
}) => {
  const classNames = classnames(
    'wt-button',
    className,
    {
      [`wt-button--color-${color}`]: color,
    }
  );

  const Tag = onClick ? 'button' : 'a';

  return (
    <Tag className={classNames} href={href} onClick={onClick} type={type}>
      {children}
    </Tag>
  );
};