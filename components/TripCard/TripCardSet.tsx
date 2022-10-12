import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { TripCard, TripCardProps } from './TripCard';

export type TripCardSetProps = {
  className?: string;
  items: TripCardProps[];
}

export const TripCardSet: FunctionComponent<TripCardSetProps> = ({ className, items }) => {
  const classNames = classnames('wt-trip-card-set', className);

  return (
    <ul className={classNames}>
      {items.map(trip => (
        <TripCard key={trip.id} {...trip} />
      ))}
    </ul>
  );
};