import { React, useRef, useState } from "react";
import { Form , Card, Alert, Breadcrumb } from "react-bootstrap";
import Button from "../../../UI/Button";
import { MdEmail } from "react-icons/md";
import {
  FaUser,
  FaMale,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
  FaEye, FaEyeSlash,
} from "react-icons/fa";

const Signup = () => {
  
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fullNameHandler = (event) => {};
  const fullNameOnBlur = () => {};
  const sexeHandler = (event) => {};

  const sexeOnBlur = () => {};

  const phoneHandler = (event) => {};

  const phoneOnBlur = () => {};
  const cityHandler = (event) => {};

  const cityOnBlur = () => {};

  const dateHandler = (event) => {};

  const dateOnBlur = () => {};
  
  return (
    <>
      <Card>
        <Card.Body>
          <h6 className="text-center mb-4">Veuillez remplir le formulaire d'inscription</h6>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="fullName">
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser size="1em" color="gray" />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Votre nom complet"
                  onChange={fullNameHandler}
                  onBlur={fullNameOnBlur}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="sexe">
              <Form.Label> </Form.Label>
              <div className="input-group">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  <FaMale size="1em" color="gray" />
                </label>
                <select
                  className={`form-select  `}
                  id="inputGroupSelect01"
                  onChange={sexeHandler}
                  onBlur={sexeOnBlur}
                >
                  <option value="Genre" className="text-muted">
                    Genre
                  </option>
                  <option value="1">Femme</option>
                  <option value="2">Homme</option>
                </select>
              </div>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label> </Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <MdEmail size="1em" color="gray" />
                </span>
                <Form.Control
                  type="email"
                  placeholder="Votre adresse email"
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="city">
            <Form.Label> </Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  < FaMapMarkerAlt size="1em" color="gray" />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Votre ville"
                  onChange={cityHandler}
                  onBlur={cityOnBlur}
                />
              </div>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label> </Form.Label>
              <div className="input-group">
              <span className="input-group-text">
                  <FaPhone size="1em" color="gray" />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Numéro de téléphone"
                  className={`form-control  `}
                  onChange={phoneHandler}
                  onBlur={phoneOnBlur}
                />
                
              </div>
            </Form.Group>

            <Form.Group controlId="date">
              <Form.Label> </Form.Label>
              <div className="input-group">
              <span className="input-group-text">
                  <FaCalendarAlt size="1em" color="gray" />
                </span>
                <Form.Control
                 placeholder="Votre date de naissance"
                  type="date"
                  className={`form-control  `}
                  value={"date"}
                  onChange={dateHandler}
                  onBlur={dateOnBlur}
                />
                
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="password"> </Form.Label>
              <div className="input-group">
              <span
              className="input-group-text"
              onClick={handlePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash size="1.5em" color="gray" />
              ) : (
                <FaEye size="1.5em" color="gray" />
              )}
            </span>
              <Form.Control
              placeholder="mot de passe"
                id="password"
                type={showPassword ? "text" : "password"}
                ref={passwordRef}
                required
              />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password-confirm">
                 
              </Form.Label>
              <div className="input-group">
              <span
              className="input-group-text"
              onClick={handlePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash size="1.5em" color="gray" />
              ) : (
                <FaEye size="1.5em" color="gray" />
              )}
            </span>
              <Form.Control
               placeholder="Confirmer le mot de passe"
                id="password-confirm"
                type={showPassword ? "text" : "password"}
                ref={passwordConfirmRef}
                required
              />
              </div>
            </Form.Group>
            <Breadcrumb/>
            <Button className="w-100 mt-3" type="submit">  Valider  </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
export default Signup;
