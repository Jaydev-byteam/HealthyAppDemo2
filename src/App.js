import {fire_auth} from './database/FirebaseDefault';
import React, {useEffect, useState} from 'react';
import Router from './container/Router/Router';
import {log} from './_utilities/UtilityFunctions';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // handle user state change
  const onAuthStateChangedListener = user => {
    console.log('onAuthStateChangedListener fired');
    setUser(user);
    setIsSignedIn(!!user);
    if (loading) {
      setLoading(false);
    }
  };
  useEffect(() => {
    return fire_auth.onAuthStateChanged(onAuthStateChangedListener);
  }, []);

  if (loading) {
    return <></>;
  }
  log('In App, user is:', user);
  return (
    <>
      <Router isSignedIn={isSignedIn} />
    </>
  );
}
