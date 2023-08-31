import React from "react";
import {table} from "react-bootstrap";

const DonationHistory = () => {
  // Simulated donation history data
  const donationHistory = [
    { date: "2023-08-01", centre: "xxxx", quantite: 50, resultat: 1 },
    { date: "2023-07-15", centre: "xxxx", quantite: 100, resultat: 1 },
    { date: "2023-06-22", centre: "xxxx", quantite: 75, resultat: 1 },
  ];

  return (
    <div>
      <h2>Historique de mes Dons</h2>
       
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Centre</th>
              <th scope="col">Quantite</th>
              <th scope="col">Resultat</th>
            </tr>
          </thead>
          <tbody>
          {donationHistory.map((donation, index) => (
            <tr>
           
            
              
              <th scope="row" key={index}>{index+1}</th>
                <td> {donation.date}</td>
                <td> {donation.centre}</td>
                <td> {donation.quantite}</td>
                <td> {donation.resultat}</td>  
                </tr>
        ))}
              
            
           
          </tbody>
        </table>
       
    </div>
  );
};

export default DonationHistory;
