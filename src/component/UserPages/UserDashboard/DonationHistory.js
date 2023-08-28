import React from 'react';

const DonationHistory = () => {
  // Simulated donation history data
  const donationHistory = [
    { date: '2023-08-01', amount: 50 },
    { date: '2023-07-15', amount: 100 },
    { date: '2023-06-22', amount: 75 },
  ];

  return (
    <div>
      <h2>Histoire des Dons</h2>
      <ul>
        {donationHistory.map((donation, index) => (
          <li key={index}>
            <strong>Date:</strong> {donation.date}, <strong>Montant:</strong> {donation.amount} $
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DonationHistory;
