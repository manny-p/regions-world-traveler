import classnames from 'classnames';
import { TripCard } from './TripCard';

export const TripCardSet = ({ items }) => {
  const classNames = classnames('trip-card-set');

  return (
    <ul className={classNames}>
      {items.map(trip => (
        <TripCard key={trip.id} {...trip} />
      ))}
    </ul>
  );
};