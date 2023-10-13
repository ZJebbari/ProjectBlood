
import React, { useState, useEffect } from "react";
import classes from "./ThreeCards.module.css";
import {
  FaUser,
  FaFlask, // Icône pour le stock de sang
  FaHospital, // Icône pour le centre,
  
} from "react-icons/fa";
const ThreeCards = () => {
  const [candidatsCount, setCandidatsCount] = useState(3);
  const [recruteursCount, setRecruteursCount] = useState(3);
  const [offresCount, setOffresCount] = useState(5);

  return (
    
      <div   className={` row  ${classes.principaldiv}`}>
        <div    className={` col-lg-3  col-md-6 mb-4 `}>
          <div className={` card border-left-primary shadow h-100 py-2  ${classes.card}`}>
            <div className="card-body">
              <div className="card-title monthly">
              <FaHospital size="1em" color="black" />
                Les centres de transfusion en chiffres</div>
              <div className="cardicon">
                <div className="card-text">{candidatsCount}</div>
                <div>
                <i class="fas fa-clipboard-list dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div    className={` col-lg-3  col-md-6 mb-4  `}>
        <div className={` card border-left-primary shadow h-100 py-2  ${classes.card}`}>
            <div className="card-body">
              <div className="card-title annual">
              <FaFlask size="1em" color="black" />
              Stock de sang (Total)</div>
              <div className="cardicon">
                <div className="card-text">{recruteursCount} L</div>
                <div>
                <i class="fas fa-clipboard-list dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div    className={` col-lg-3  col-md-6 mb-4  `}>
        <div className={` card border-left-primary shadow h-100 py-2  ${classes.card}`}>
            <div className="card-body">
            
              <div className="card-title task">
               
                  <FaUser size="1em" color="black" />
                Donneur (Total)</div>
              <div className="cardicon">
                <div className="card-text">{offresCount}</div>
                <div>
                  <i class="fas fa-clipboard-list dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default ThreeCards;