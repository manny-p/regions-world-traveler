import type { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Category } from '../../types';

export type TripCategoryProps = {
  category: Category;
  className: string;
};

export const TripCategory: FunctionComponent<TripCategoryProps> = ({ category, className }) => {
  const classNames = classnames(
    'wt-trip-category',
    className,
    {
      [`wt-trip-category--${category}`]: category,
    }
  );

  return (
    <strong className={classNames}>
      {category}
    </strong>
  );
};
