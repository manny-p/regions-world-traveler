import classnames from 'classnames';
import { FunctionComponent } from 'react';
import { Trip } from '../../types';
import { TripCategory } from '..';
import Link from 'next/link';

export type TripCardProps = Trip;

export const TripCard: FunctionComponent<TripCardProps> = ({
  category,
  description,
  date,
  featured,
  id,
  image,
  location,
  status,
}) => {
  const DEFAULT_STATUS = 'register now';

  const classNames = classnames(
    'trip-card',
    {
      'trip-card--featured': featured,
    },
  );

  return (
    <li id={`trip-card-${id}`} className={classNames} role="listitem">
      <div className="trip-card__content-wrapper">
        <div className="trip-card__header">
          <h2 className="trip-card__location">
            <Link href={`/trip/${id}`}>
              <a className="trip-card__location-link">
                {location}
              </a>
            </Link>
          </h2>
          <strong className="trip-card__status">
            {status || DEFAULT_STATUS}
          </strong>
        </div>
        <p className="trip-card__date">
          {date}
        </p>
        <p className="trip-card__description">
          {description}
        </p>
      </div>
      <TripCategory category={category} className="trip-card__category" />
      <div className="trip-card__image-wrapper">
        <img className="trip-card__image" src={image} alt="" />
      </div>
    </li>
  );
};
