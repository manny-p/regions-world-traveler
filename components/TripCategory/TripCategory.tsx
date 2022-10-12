import classnames from 'classnames';

export const TripCategory = ({ category, className }) => {
  const classNames = classnames(
    'trip-category',
    className,
    {
      [`trip-category--${category}`]: category,
    }
  );

  return (
    <strong className={classNames}>
      {category}
    </strong>
  );
};
