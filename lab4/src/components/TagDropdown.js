import React, { useState } from "react";
import { FormControl, Dropdown, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const TagDropdown = ({ usedTags, addTag }) => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Pick from list or add new"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button
            variant="secondary"
            onClick={() => {
              addTag(value);
            }}
          >
            Add
          </Button>
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter((child) =>
              child.props.children.toLowerCase().includes(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Add tags
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {usedTags.map((tag) => (
          <Dropdown.Item
            key={uuidv4()}
            onClick={() => {
              addTag(tag);
            }}
          >
            {tag}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TagDropdown;
