import './scss/BidHistory.scss';
import React from 'react';
const BidHistory = ({ bids }) => {
  return (
    <div className="bid-history-container">
      <h2>Bid History</h2>
      <table>
        <thead>
          <tr>
            <th>Bidder</th>
            <th>Amount</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid, index) => (
            <tr key={index} className={bid.new ? 'new-bid-entry' : ''}>
              <td>{bid.bidder}</td>
              <td className="bid-amount">${bid.amount}</td>
              <td className="bid-time">{bid.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidHistory;
