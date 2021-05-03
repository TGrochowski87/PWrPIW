import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import NewForm from "./NewForm";

const NewEntry = ({ addRecord, addGroupRecord, usedTags, setUsedTags }) => {
  const [formStatus, setFormStatus] = useState({
    active: false,
    group: false,
  });

  return (
    // <div className="new-entry">
    <Container className="my-5 w-50 entry">
      {formStatus.active ? (
        <NewForm
          addRecord={formStatus.group ? addGroupRecord : addRecord}
          usedTags={usedTags}
          setUsedTags={setUsedTags}
          isGroupForm={formStatus.group}
        />
      ) : (
        <Form>
          <Button
            variant="secondary"
            type="submit"
            className="choice"
            onClick={() => {
              setFormStatus({ active: true, group: false });
            }}
          >
            New single person entry
          </Button>
          <br />
          <br />
          <br />
          <Button
            variant="secondary"
            type="submit"
            className="choice"
            onClick={() => {
              setFormStatus({ active: true, group: true });
            }}
          >
            New group entry
          </Button>
        </Form>
      )}
    </Container>
    //</div>
  );
};

export default NewEntry;
