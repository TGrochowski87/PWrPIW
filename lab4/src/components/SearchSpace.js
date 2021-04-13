import React from "react";
import { Form, Button, Badge, Row, Col } from "react-bootstrap";

const SearchSpace = ({
  tagSearchInput,
  setTagSearchInput,
  titleSearchInput,
  setTitleSearchInput,
  shownAmount,
}) => {
  return (
    <div className="search-space">
      <div className="input-space">
        <Form>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="4">
              Search by tags:
            </Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                placeholder="Search"
                value={tagSearchInput}
                onChange={(event) => {
                  setTitleSearchInput("");
                  setTagSearchInput(event.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="4">
              Search by title:
            </Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                placeholder="Search"
                value={titleSearchInput}
                onChange={(event) => {
                  setTagSearchInput("");
                  setTitleSearchInput(event.target.value);
                }}
              />
            </Col>
          </Form.Group>
        </Form>
      </div>
      <Button variant="secondary">
        Found <Badge variant="light">{shownAmount}</Badge>
        <span className="sr-only">unread messages</span>
      </Button>
    </div>
  );
};

export default SearchSpace;
