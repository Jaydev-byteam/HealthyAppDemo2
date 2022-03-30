import {fire_auth} from './database/FirebaseDefault';
import React, {useEffect, useState, useRef} from 'react';
import Router from './container/Router/Router';
import {AppState} from 'react-native';


export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const appState = useRef(AppState.currentState);

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

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('Healthy App has been activated');
      }
    });
    return () => {
      subscription.remove();
    };
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
