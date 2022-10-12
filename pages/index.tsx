import { useState, useEffect } from 'react';
import Head from 'next/head';
import { App, TripCardSet } from '../components';
import { TripService } from '../services';
import { Trip } from '../types';

const HomePage = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTrips = async () => {
      const loadedTrips = await TripService.getTrips();
      setLoading(false);
      setTrips(loadedTrips);
    };
    loadTrips();
  }, []);

  return (
    <App>
      <Head>
        <title>World Traveler | Home</title>
        <meta name="description" content="A travel site you'll love to use for your next trip!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <p>Loading ...</p>}
      {trips.length > 0 && <TripCardSet items={trips} />}
    </App>
  )
};

export default HomePage;