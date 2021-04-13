import React, { useState } from "react";
import { Form, Button, Badge } from "react-bootstrap";
import TagDropdown from "./TagDropdown";
import { v4 as uuidv4 } from "uuid";

const NewEntry = ({ addRecord }) => {
  const [titleInput, setTitleInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [tags, setTags] = useState([]);
  const [usedTags, setUsedTags] = useState(["react", "c++", "c#"]);

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
      title: titleInput,
      name: nameInput,
      description: descriptionInput,
      tags: tags,
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
    <div className="new-entry">
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewEntry;
