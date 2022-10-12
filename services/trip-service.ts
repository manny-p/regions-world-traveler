import { Trip } from '../types';

export const trips: Trip[] = [
  {
    category: 'international',
    date: 'April 15, 2020',
    description: 'Ut placet, inquam tum dicere exorsus est laborum et via procedat oratio quaerimus igitur, quid et caritatem, quae sine causa? quae fuerit causa, mox videro; interea hoc epicurus in culpa, qui blanditiis praesentium voluptatum adipiscendarum causa aut officiis debitis aut fugit, sed uti oratione perpetua.',
    featured: true,
    id: '1',
    image: 'london-img.jpg',
    location: 'London, England',
  },
  {
    category: 'domestic',
    date: 'March 10, 2019',
    description: 'Torquatos nostros? quos tu paulo ante cum soluta nobis est.',
    featured: false,
    id: '2',
    image: 'atlanta-img.png',
    location: 'Atlanta, GA',
  },
  {
    category: 'international',
    date: 'February 15, 2020',
    description: 'Primum igitur, inquit, sic agam, ut aliquid ex eo delectu.',
    featured: false,
    id: '3',
    image: 'singapore-img.jpg',
    location: 'Singapore',
    status: '3 spots left!',
  },
];

export const getTrips = () => new Promise<Trip[]>((resolve, reject) => {
  try {
    resolve(trips);
  } catch (error) {
    reject(error);
  }
});

export const getTrip = (_id: string) => new Promise<Trip>((resolve, reject) => {
  try {
    const trip = trips.filter(({ id }) => id === _id);
    resolve(trip[0]);
  } catch (error) {
    reject(error);
  }
});