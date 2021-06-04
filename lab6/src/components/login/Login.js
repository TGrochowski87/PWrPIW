import React, { useState } from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { auth } from "../../utils/Firebase";

const Login = ({ setUserName }) => {
  const history = useHistory();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [wrongInput, setWrongInput] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(emailInput, passwordInput)
      .then((u) => {
        setUserName(u.user.displayName);
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
        return;
      });
  };

  return (
    <>
      <Container className="my-5 w-50 login-space">
        <Row>
          <Col>
            <Form style={{ marginTop: "1rem" }} onSubmit={submitHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className={wrongInput ? "wrong-input" : ""}
                  type="email"
                  placeholder="Email"
                  value={emailInput}
                  onChange={(event) => setEmailInput(event.target.value)}
                  onFocus={() => {
                    setWrongInput(false);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Hasło</Form.Label>
                <Form.Control
                  className={wrongInput ? "wrong-input" : ""}
                  type="password"
                  placeholder="Hasło"
                  value={passwordInput}
                  onChange={(event) => setPasswordInput(event.target.value)}
                  onFocus={() => {
                    setWrongInput(false);
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Zaloguj
              </Button>
              <Link to="/register">
                <Button variant="link">Zarejestruj się</Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
