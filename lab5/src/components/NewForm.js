import React, { useState } from "react";
import { Form, Button, Badge } from "react-bootstrap";
import TagDropdown from "./TagDropdown";
import { v4 as uuidv4 } from "uuid";

const NewForm = ({ addRecord, usedTags, setUsedTags, isGroupForm }) => {
  const [titleInput, setTitleInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [peopleNeededInput, setPeopleNeededInput] = useState(1);
  const [tags, setTags] = useState([]);

  const clearInputs = () => {
    setTitleInput("");
    setNameInput("");
    setDescriptionInput("");
    setTags([]);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (titleInput === "" || nameInput === "" || descriptionInput === "") {
      alert("Please fill the entire form before posting!");
      return;
    }

    const toAdd = [];

    for (let element of tags) {
      if (!usedTags.includes(element)) {
        toAdd.push(element);
      }
    }
    setUsedTags([...toAdd, ...usedTags]);

    let recordData = {
      id: uuidv4(),
      title: titleInput,
      name: nameInput,
      description: descriptionInput,
      tags: tags,
      peopleNeeded: peopleNeededInput,
    };

    addRecord(recordData);
    clearInputs();
  };

  const addTag = (value) => {
    if (tags.length === 6) {
      alert("Max amount reached!");
      return;
    }

    if (value !== null && value !== "") {
      if (tags.includes(value)) {
        alert("Tag already added!");
        return;
      }

      setTags([value, ...tags]);
    }
  };

  return (
    <Form
      onSubmit={(event) => {
        submitHandler(event);
      }}
    >
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          maxLength="30"
          value={titleInput}
          onChange={(event) => {
            setTitleInput(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Full name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full name"
          maxLength="30"
          value={nameInput}
          onChange={(event) => {
            setNameInput(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          maxLength="300"
          value={descriptionInput}
          onChange={(event) => {
            setDescriptionInput(event.target.value);
          }}
        />
      </Form.Group>

      {isGroupForm ? (
        <div className="form-bottom">
          <div className="bottom-left">
            <Form.Group>
              <Form.Label>
                Tags<p>Max. 6</p>
              </Form.Label>
              <div className="tag-space">
                {tags.map((tag) => (
                  <Badge pill key={uuidv4()} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Form.Group>

            <TagDropdown usedTags={usedTags} addTag={addTag} />
            <br />
          </div>
          <Form.Group>
            <Form.Label>People needed</Form.Label>
            <Form.Control
              type="number"
              placeholder="1"
              min="1"
              max="20"
              value={peopleNeededInput}
              onChange={(event) => {
                if (event.target.value > 20) {
                  setPeopleNeededInput(20);
                } else if (event.target.value < 1) {
                  setPeopleNeededInput(1);
                } else {
                  setPeopleNeededInput(event.target.value);
                }
              }}
            />
          </Form.Group>
        </div>
      ) : (
        <>
          <Form.Group>
            <Form.Label>
              Tags<p>Max. 6</p>
            </Form.Label>
            <div className="tag-space">
              {tags.map((tag) => (
                <Badge pill key={uuidv4()} variant="primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </Form.Group>

          <TagDropdown usedTags={usedTags} addTag={addTag} />
          <br />
        </>
      )}
      {/* <div className="form-bottom">
        <div className="bottom-left">
          <Form.Group>
            <Form.Label>
              Tags<p>Max. 6</p>
            </Form.Label>
            <div className="tag-space">
              {tags.map((tag) => (
                <Badge pill key={uuidv4()} variant="primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </Form.Group>

          <TagDropdown usedTags={usedTags} addTag={addTag} />
          <br />
        </div>
        <Form.Group>
          <Form.Label>People needed</Form.Label>
          <Form.Control
            type="number"
            placeholder="1"
            min="1"
            max="20"
            value={peopleNeededInput}
            onChange={(event) => {
              if (event.target.value > 20) {
                setPeopleNeededInput(20);
              } else if (event.target.value < 1) {
                setPeopleNeededInput(1);
              } else {
                setPeopleNeededInput(event.target.value);
              }
            }}
          />
        </Form.Group>
      </div> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewForm;
