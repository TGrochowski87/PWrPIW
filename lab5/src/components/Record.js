import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Edit as EditIcon } from "@material-ui/icons";
import { v4 as uuidv4 } from "uuid";
import { Badge } from "react-bootstrap";

import TagDropdown from "./TagDropdown";

const Record = ({ data, usedTags, setUsedTags, editRecord }) => {
  const [editMode, setEditMode] = useState(false);

  const [titleInput, setTitleInput] = useState(data.title);
  const [nameInput, setNameInput] = useState(data.name);
  const [descriptionInput, setDescriptionInput] = useState(data.description);
  const [tags, setTags] = useState(data.tags);

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

  const saveChanges = () => {
    const editedData = {
      id: data.id,
      title: titleInput === "" ? data.title : titleInput,
      name: nameInput === "" ? data.name : nameInput,
      description:
        descriptionInput === "" ? data.description : descriptionInput,
      tags: tags.length === 0 ? data.tags : tags,
    };

    const toAdd = [];

    for (let element of tags) {
      if (!usedTags.includes(element)) {
        toAdd.push(element);
      }
    }
    setUsedTags([...toAdd, ...usedTags]);

    setEditMode(false);
    editRecord(editedData);
  };

  return (
    <div className="record">
      <div className="icon-back">
        <FontAwesomeIcon icon={faUserGraduate} className="icon" />
      </div>
      <div className="record-data">
        <div className="record-header">
          <h3>
            {editMode ? (
              <input
                type="text"
                maxLength="30"
                placeholder="Title"
                value={titleInput}
                onChange={(event) => {
                  setTitleInput(event.target.value);
                }}
              />
            ) : (
              `${data.title}`
            )}
          </h3>
          <h3> - </h3>
          <h3>
            {editMode ? (
              <input
                type="text"
                maxLength="30"
                placeholder="Full name"
                value={nameInput}
                onChange={(event) => {
                  setNameInput(event.target.value);
                }}
              />
            ) : (
              `${data.name}`
            )}
          </h3>
        </div>
        <p>
          {editMode ? (
            <textarea
              rows="3"
              placeholder="Description"
              value={descriptionInput}
              onChange={(event) => {
                setDescriptionInput(event.target.value);
              }}
            />
          ) : (
            `${data.description}`
          )}
        </p>
        <>
          {editMode ? (
            <>
              <div className="tag-space">
                {tags.map((tag) => (
                  <Badge pill key={uuidv4()} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <TagDropdown usedTags={usedTags} addTag={addTag} />
            </>
          ) : (
            <h6>{data.tags.map((tag) => `#${tag} `)}</h6>
          )}
        </>
      </div>
      <FontAwesomeIcon icon={faEnvelope} className="icon" />
      <div
        className="edit"
        onClick={() => {
          if (!editMode) {
            setEditMode(true);
          } else {
            saveChanges();
          }
        }}
      >
        {editMode ? (
          <>
            <EditIcon /> Save
          </>
        ) : (
          <>
            <EditIcon /> Edit entry
          </>
        )}
      </div>
    </div>
  );
};

export default Record;
