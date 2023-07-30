import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/styles.css";
import classes from "./Banner.module.css";
import Button from "../../UI/Button";
const Banner = () => {
  return (
    <section
      className={`d-flex justify-content-center align-items-center pt-5 ${classes["banner"]}`}
    >
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 banner-desc lh-lg">
            <h1 className="text-capitalize py-3 redressed">
              REJOIGNEZ-NOUS <br />
              DEVENEZ DONNEUR!
            </h1>
            <p>
              <Button>Je cree un compte</Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;