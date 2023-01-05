import React from 'react';
import Logout from './LogOut';
import { useIsAuthenticated } from '../../redux/auth/hook';

export default function Homepage() {
  const useAuthenticated = useIsAuthenticated();

  if (!useAuthenticated) {
    return (
      <div>
        You are not authenticated. Please login to continue.
      </div>
    );
  }

  return (
    <div>
      homepage
      <div><Logout /></div>
    </div>
  );
}
