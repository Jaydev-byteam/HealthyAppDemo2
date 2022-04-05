import {fire_auth} from './database/FirebaseDefault';
import React, {useEffect, useState} from 'react';
import Router from './container/Router/Router';



export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);


  // handle user state change
  const onAuthStateChangedListener = user => {
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

  return (
    <>
      <Router isSignedIn={isSignedIn} />
    </>
  );
}
