import type { FunctionComponent } from 'react';
import classnames from 'classnames';
import { TripCategory } from '..';
import Link from 'next/link';
import { Trip } from '../../types';

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
    'wt-trip-card',
    {
      'wt-trip-card--featured': featured,
    },
  );

  return (
    <li id={`trip-card-${id}`} className={classNames} role="listitem">
      <div className="wt-trip-card__content-wrapper">
        <div className="wt-trip-card__header">
          <h2 className="wt-trip-card__location">
            <Link href={`/trip/${id}`}>
              <a className="wt-trip-card__location-link">
                {location}
              </a>
            </Link>
          </h2>
            {status || DEFAULT_STATUS}
          </strong>
        </div>
        <p className="wt-trip-card__date">
          {date}
        </p>
        <p className="wt-trip-card__description">
          {description}
        </p>
      </div>
      <TripCategory category={category} className="wt-trip-card__category" />
      <div className="wt-trip-card__image-wrapper">
        <img className="wt-trip-card__image" src={image} alt="" />
      </div>
    </li>
  );
};
