import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/items')
        .then(res => setItems(res.data))
        .catch(err => console.log(err));
    }, [])
  return (
    <div className='auction-container'>
        {items.map(item => (
            <motion.div
            key={item.id}
            className='auction-item'
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            whileHover={{ scale: 1.05}}
            transition={{ duration: 0.5}}
            >
                <h2>{item.name}</h2>
                <p>Current Bid: ${item.currentBid}</p>
                <Link to={`/item/${item.id}`}>View Item</Link>
            </motion.div>
        ))}
    </div>
  );
};

export default ItemList;