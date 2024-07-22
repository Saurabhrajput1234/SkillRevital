import React, { useEffect, useState } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from './Loading';

const Profile = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (isAuthenticated) {
          const token = await getAccessTokenSilently();
          console.log("token",token)
          const response = await fetch('/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const userData = await response.json();
          setUserData(userData);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isAuthenticated, getAccessTokenSilently]);

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <div>Error fetching user profile. Please try again later.</div>;
  // }

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          {isAuthenticated && (
            <img
              src={user.picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          )}
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{isAuthenticated ? user.name : 'Guest'}</h2>
          <p className="lead text-muted">{isAuthenticated ? user.email : 'Login to view profile'}</p>
        </div>
      </div>
      {isAuthenticated && (
        <div className="row">
          <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
