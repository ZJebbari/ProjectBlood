import React from "react";
import classes from "./DonInfos.module.css";
import MyImage1 from "../../assets/img/sang-1 (2).jpg"; // Chemin d'accès à l'image depuis le composant
import MyImage2 from "../../assets/img/risque.jpg"; // Chemin d'accès à l'image depuis le composant
import MyImage3 from "../../assets/img/SANG-2.jpg";
import MyImage4 from "../../assets/img/SANG-3.jpg";
import MyImage5 from "../../assets/img/SANG-4.jpg";
import MyImage6 from "../../assets/img/consultation.jpg";
const DonInfos = () => {
  return (
    <section className="available merriweather py-5">
      <div className="container">
        {/* Première carte */}
        <div className="row">
          <div className="card mb-3 border-0 rounded-0">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={MyImage1}
                  className={`img-fluid ${classes["imagePers"]}`}
                  alt="description de l'image"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body px-0">
                  <h3 className="card-title">Le don de sang, c’est quoi ?</h3>
                  <p className="card-text">
                    Le sang est un liquide vital, indispensable au
                    fonctionnement du corps humain, il ne peut être ni fabriqué
                    artificiellement ni synthétisé. On peut facilement le
                    prélever sur un individu sain pour le transfuser à un
                    individu malade. Le don du sang est le seul moyen nécessaire
                    pour couvrir les besoins des malades pour rester en vie. La
                    quantité de sang prélevée doit être au moins égale à environ
                    450 ml, équivalent de (7%) du volume global de sang humain
                    normal, et la durée du prélèvement est habituellement entre
                    5 et 15 minute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième carte avec le carrousel */}
        <div className="row">
          <div className="card my-5 border-0 rounded-0">
            <div className="row">
              <div className="col-md-6">
                <div className="card-body px-0">
                  <h3 className="card-title">Existe-t-il des risques ?</h3>
                  <p className="card-text">
                    Les donneurs ne risquent pas d’être infectés, car le
                    matériel de prélèvement est stérile, à usage unique supprime
                    tout risque de contamination et la quantité de sang prélevée
                    n’est pas préjudiciable pour leurs santés.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={MyImage2}
                      className={`img-fluid ${classes["imagePers"]}`}
                      alt="description de l'image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Troisième carte */}
        <div className="row">
          <div className="card mb-3 border-0 rounded-0">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={MyImage3}
                  className={`img-fluid ${classes["imagePers"]}`}
                  alt="description de l'image"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body px-0">
                  <h3 className="card-title">Pourquoi donner du sang ?</h3>
                  <div className="card-text">
                    Donner du sang, est un excellent service humanitaire pour
                    sauver des vies humaines lors : <br />
                    <ul className={`${classes["b"]}`}>
                      <li>D’accidents</li>
                      <li>
                        Des Chirurgies (La chirurgie cardiaque, la chirurgie
                        vasculaire, la transplantation d’organes et autres){" "}
                      </li>
                      <li>
                        Pour les femmes présentant des complications de la
                        grossesse (comme une grossesse extra-utérine ou une
                        hémorragie avant, pendant ou après la naissance)
                      </li>
                      <li>
                        Pour le traitement des malades (maladies du sang
                        génétiques, cancer, l’insuffisance rénale, thalassémie…
                      </li>
                      <li>Donner du sang au malade est un devoir religieux.</li>
                      <li>Chaque don de sang peut sauver trois vies.</li>
                      <li>
                        Toutes les 10 secondes, quelqu’un a besoin d’une
                        transfusion sanguine pour sauver sa vie.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4eme carte avec le carrousel */}
        <div className="row">
          <div className="card my-5 border-0 rounded-0">
            <div className="row">
              <div className="col-md-6">
                <div className="card-body px-0">
                  <h3 className="card-title">
                    Quels sont les bienfaits du don de sang?
                  </h3>
                  <div className="card-text">
                    <ul className={`${classes["b"]}`}>
                      <li>Contribuer à stimuler la circulation sanguine.</li>
                      <li>
                        Contribuer à stimuler la moelle osseuse et régénérer des
                        cellules sanguines (globules rouges, globules blancs,
                        plaquettes).{" "}
                      </li>
                      <li>
                        Réduire le volume de fer présent dans votre corps, or un
                        taux trop important de fer dans le sang peut accélérer
                        le processus d’oxydation du cholestérol et rendre le
                        sang plus épais, ce qui accroît le risque de maladies
                        cardio-vasculaires et d’infarctus.
                      </li>
                      <li>
                        Les personnes qui donnent leurs sangs au moins une fois
                        chaque année, sont Les moins vulnérables à l’infection
                        aux maladies circulatoires et de leucémie.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={MyImage4}
                      className={`img-fluid ${classes["imagePers"]}`}
                      alt="description de l'image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 5 carte */}
        <div className="row">
          <div className="card mb-3 border-0 rounded-0">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={MyImage5}
                  className={`img-fluid ${classes["imagePers"]}`}
                  alt="description de l'image"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body px-0">
                  <h3 className="card-title">Qui peut donner son sang?</h3>
                  <div className="card-text">
                    <ul className={`${classes["b"]}`}>
                      <li>Toute personne en bonne santé.</li>
                      <li>Il faut être âgé de 18 à 60 ans. </li>
                      <li>Peser plus de 50 kg.</li>
                    </ul>

                    <b>
                      Il y’a des cas exceptionnels empêche temporairement le don
                      de sang, parmi eux :
                    </b>
                    <ul className={`${classes["b"]}`}>
                      <li>
                        Après certains vaccins ou La prise de certains
                        médicaments : Délai à respecter 3 semaines.
                      </li>
                      <li>
                        Après les soins dentaires, une avulsion dentaire, La
                        Hijama ou l’extraction par ventouses : Délai à respecter
                        6 mois.
                      </li>
                      <li>
                        Au cas de la tuberculose : Délais à respecter 5 ans
                        après la guérison.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6eme carte avec le carrousel */}
        <div className="row">
          <div className="card my-5 border-0 rounded-0">
            <div className="row">
              <div className="col-md-6">
                <div className="card-body px-0">
                  <h3 className="card-title">
                    Quelles sont les précautions recommandées après un don de
                    sang ?
                  </h3>
                  <ul className={`${classes["b"]}`}>
                    <div className="card-text">
                      <li>
                        Prenez le temps de bien vous reposer et prenez un repas
                        léger.
                      </li>
                      <li>
                        garder le pansement qui recouvre le site de ponction
                        pendant 1 à 3 heures.
                      </li>
                      <li>
                        Buvez une grande quantité de liquides plus que
                        d’habitude pendant les deux prochaines heures après le
                        don.
                      </li>
                      <li>
                        Éviter toute activité physique intense pendant 24
                        heures.
                      </li>
                      <li>
                        Si vous êtes un fumeur, ne fumez pas dans les deux
                        heures qui suivent, car le tabac stimule le sang d’aller
                        vers les poumons, provoquant un état de vertige et la
                        pâleur.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={MyImage6}
                      className={`img-fluid ${classes["imagePers"]}`}
                      alt="description de l'image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonInfos;
