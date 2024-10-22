import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [bid, setBid] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8000/items/${id}`)
      .then(res => setItem(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleBid = () => {
    axios.post('http://localhost:8000/bid', { itemId: id, bidAmount: bid })
      .then(res => alert("Bid placed successfully!"))
      .catch(err => console.log(err));
  };

  return item ? (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Current Bid: ${item.currentBid}</p>
      <input type="number" value={bid} onChange={e => setBid(e.target.value)} />
      <button className="place-bid" onClick={handleBid}>Place Bid</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ItemDetail;
