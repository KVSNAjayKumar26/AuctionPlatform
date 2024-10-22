import { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/profile')
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  return user ? (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      <h2>Your Auctions</h2>
      <ul>
        {user.auctions.map(auction => (
          <li key={auction.id}>{auction.name} - Current Bid: ${auction.currentBid}</li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default UserProfile;
