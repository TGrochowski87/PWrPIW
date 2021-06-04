import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { auth } from "../../utils/Firebase";

const Register = () => {
  const history = useHistory();

  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(emailInput, passwordInput)
      .then(() => {
        auth
          .signInWithEmailAndPassword(emailInput, passwordInput)
          .then((loggedUser) => {
            loggedUser.user.updateProfile({
              displayName: usernameInput,
            });
          })
          .catch((error) => {
            alert(error.message);
            return;
          });
      })
      .then(() => {
        history.push("/login");
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
                <Form.Label>Nazwa użytkownika</Form.Label>
                <Form.Control
                  type="login"
                  placeholder="Nazwa użytkownika"
                  value={usernameInput}
                  onChange={(event) => setUsernameInput(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={emailInput}
                  onChange={(event) => setEmailInput(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Hasło</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Hasło"
                  value={passwordInput}
                  onChange={(event) => setPasswordInput(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Zarejestruj
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
